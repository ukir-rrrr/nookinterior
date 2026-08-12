import { z } from "zod";

export const paymentMethodSchema = z.enum(["credit", "applepay", "cod"]);

/** クライアントから受け取る行：価格は一切受け取らない */
export const checkoutLineItemSchema = z.object({
  productId: z
    .string()
    .min(1)
    .max(64)
    .regex(/^[a-zA-Z0-9_-]+$/, "不正な商品IDです"),
  colorId: z.string().min(1).max(64),
  colorLabel: z.string().min(1).max(64),
  sizeId: z.string().min(1).max(64),
  sizeLabel: z.string().min(1).max(64),
  quantity: z.number().int().min(1).max(10),
});

export const customerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "お名前を入力してください")
    .max(80, "お名前は80文字以内で入力してください"),
  email: z
    .string()
    .trim()
    .email("メールアドレスの形式が正しくありません")
    .max(254),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-() ]{10,20}$/, "電話番号の形式が正しくありません"),
  postalCode: z
    .string()
    .trim()
    .regex(/^\d{3}-?\d{4}$/, "郵便番号は1234567または123-4567の形式で入力してください"),
  prefecture: z
    .string()
    .trim()
    .min(1, "都道府県を入力してください")
    .max(20),
  address: z
    .string()
    .trim()
    .min(1, "住所を入力してください")
    .max(200, "住所は200文字以内で入力してください"),
  paymentMethod: paymentMethodSchema,
});

export const createCheckoutSchema = z.object({
  customer: customerSchema,
  items: z
    .array(checkoutLineItemSchema)
    .min(1, "カートが空です")
    .max(50, "一度に注文できる商品数を超えています"),
});

export const verifyCheckoutSchema = z.object({
  token: z.string().min(1).max(8192),
  komojuSessionId: z.string().max(128).optional(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(2000),
});

export type CreateCheckoutInput = z.infer<typeof createCheckoutSchema>;
export type CheckoutLineInput = z.infer<typeof checkoutLineItemSchema>;
