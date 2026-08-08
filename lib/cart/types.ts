export type CartItem = {
  key: string;
  productId: string;
  colorId: string;
  colorLabel: string;
  sizeId: string;
  sizeLabel: string;
  quantity: number;
};

export type AddToCartInput = {
  productId: string;
  colorId: string;
  colorLabel: string;
  sizeId: string;
  sizeLabel: string;
  quantity: number;
};

export const CART_STORAGE_KEY = "nook-interior-cart";

export const SHIPPING_FLAT = 880;
export const SHIPPING_FREE_THRESHOLD = 22000;

export function makeCartItemKey(
  productId: string,
  colorId: string,
  sizeId: string,
): string {
  return `${productId}__${colorId}__${sizeId}`;
}
