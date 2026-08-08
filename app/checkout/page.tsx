import type { Metadata } from "next";
import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
  title: "お支払い・ご購入手続き",
  description: "配送先情報とお支払い方法を入力してご注文を確定します。",
};

export default function CheckoutPage() {
  return <CheckoutForm />;
}
