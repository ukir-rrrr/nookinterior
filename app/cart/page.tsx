import type { Metadata } from "next";
import CartView from "@/components/CartView";

export const metadata: Metadata = {
  title: "カート",
  description: "roomy のショッピングカートです。",
};

export default function CartPage() {
  return <CartView />;
}
