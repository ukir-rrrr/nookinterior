import { randomInt } from "crypto";
import {
  getShippingFee,
  getUnitPrice,
} from "@/lib/cart/pricing";
import type { CartItem } from "@/lib/cart/types";
import type { CheckoutFormData, OrderSummary } from "@/lib/cart/order";
import { getProductById } from "@/lib/data/products";
import type { CheckoutLineInput } from "@/lib/validation/checkout";

export const CHECKOUT_TOKEN_TTL_MS = 2 * 60 * 60 * 1000; // 2時間

export type SignedOrderPayload = OrderSummary & {
  exp: number;
  mode: "demo" | "komoju";
  komojuSessionId?: string;
};

export function createSecureOrderId(): string {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = randomInt(1000, 10000);
  return `NK${y}${m}${d}-${rand}`;
}

/**
 * クライアントの価格は一切使わず、カタログから再計算する。
 * 存在しない商品・在庫なしオプションは拒否する。
 */
export function buildOrderFromCatalog(
  customer: CheckoutFormData,
  lines: CheckoutLineInput[],
): { order: OrderSummary } | { error: string } {
  const items: CartItem[] = [];
  let subtotal = 0;

  for (const line of lines) {
    const product = getProductById(line.productId);
    if (!product) {
      return { error: `商品が見つかりません（${line.productId}）` };
    }

    const color = product.colors.find((c) => c.id === line.colorId);
    const size = product.sizes.find((s) => s.id === line.sizeId);
    if (!color || !size) {
      return { error: `選択できないオプションがあります（${product.name}）` };
    }
    if (!color.inStock || !size.inStock) {
      return { error: `在庫のないオプションが選択されています（${product.name}）` };
    }
    // ラベル改ざん対策：サーバー側の正式ラベルを使う
    if (color.label !== line.colorLabel || size.label !== line.sizeLabel) {
      return { error: `オプション情報が一致しません（${product.name}）` };
    }

    const unit = getUnitPrice(product.id);
    if (unit <= 0) {
      return { error: `価格を取得できない商品があります（${product.name}）` };
    }

    subtotal += unit * line.quantity;
    items.push({
      key: `${product.id}__${color.id}__${size.id}`,
      productId: product.id,
      colorId: color.id,
      colorLabel: color.label,
      sizeId: size.id,
      sizeLabel: size.label,
      quantity: line.quantity,
    });
  }

  const shipping = getShippingFee(subtotal);
  const order: OrderSummary = {
    orderId: createSecureOrderId(),
    createdAt: new Date().toISOString(),
    customer,
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
  };

  return { order };
}

export function toSignedPayload(
  order: OrderSummary,
  mode: "demo" | "komoju",
  komojuSessionId?: string,
): SignedOrderPayload {
  return {
    ...order,
    mode,
    komojuSessionId,
    exp: Date.now() + CHECKOUT_TOKEN_TTL_MS,
  };
}

export function toPublicOrder(payload: SignedOrderPayload): OrderSummary {
  const {
    orderId,
    createdAt,
    customer,
    items,
    subtotal,
    shipping,
    total,
  } = payload;
  return {
    orderId,
    createdAt,
    customer,
    items,
    subtotal,
    shipping,
    total,
  };
}
