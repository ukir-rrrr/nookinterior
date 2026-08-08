import {
  SHIPPING_FLAT,
  SHIPPING_FREE_THRESHOLD,
  type CartItem,
} from "@/lib/cart/types";
import { getProductById } from "@/lib/data/products";

export function getUnitPrice(productId: string): number {
  const product = getProductById(productId);
  if (!product) return 0;
  return product.salePrice ?? product.price;
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => {
    return sum + getUnitPrice(item.productId) * item.quantity;
  }, 0);
}

export function getShippingFee(subtotal: number): number {
  if (subtotal <= 0) return 0;
  return subtotal >= SHIPPING_FREE_THRESHOLD ? 0 : SHIPPING_FLAT;
}

export function getCartTotal(items: CartItem[]): {
  subtotal: number;
  shipping: number;
  total: number;
  itemCount: number;
} {
  const subtotal = getCartSubtotal(items);
  const shipping = getShippingFee(subtotal);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
    itemCount,
  };
}
