import type { CartItem } from "@/lib/cart/types";

export const ORDER_STORAGE_KEY = "nook-interior-last-order";

export type PaymentMethod =
  | "credit"
  | "bank"
  | "applepay"
  | "cod";

export const paymentMethodLabels: Record<PaymentMethod, string> = {
  credit: "クレジットカード",
  bank: "銀行振込",
  applepay: "Apple Pay",
  cod: "代金引換",
};

export type CheckoutFormData = {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  prefecture: string;
  address: string;
  paymentMethod: PaymentMethod;
};

export type OrderSummary = {
  orderId: string;
  createdAt: string;
  customer: CheckoutFormData;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
};

export function createOrderId(): string {
  const date = new Date();
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(Math.random() * 9000) + 1000;
  return `NK${y}${m}${d}-${rand}`;
}
