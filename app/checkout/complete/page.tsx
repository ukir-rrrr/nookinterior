import type { Metadata } from "next";
import { Suspense } from "react";
import CheckoutComplete from "@/components/CheckoutComplete";

export const metadata: Metadata = {
  title: "ご注文完了",
  description: "ご注文ありがとうございました。",
};

export default function CheckoutCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <p className="text-sm text-[#6b6b6b]">読み込み中...</p>
        </div>
      }
    >
      <CheckoutComplete />
    </Suspense>
  );
}
