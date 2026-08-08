import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description: "配送、返品、お支払いなどに関するよくあるご質問です。",
};

const faqs = [
  {
    q: "送料はいくらですか？",
    a: "全国一律880円（税込）です。22,000円（税込）以上のご購入で送料無料になります。大型家具は別途送料が発生する場合があります。",
  },
  {
    q: "届くまでどのくらいかかりますか？",
    a: "ご注文確定後、通常5〜10営業日以内に発送します。大型家具は別途納期をご案内する場合があります。",
  },
  {
    q: "返品はできますか？",
    a: "商品到着後8日以内、未使用・未組立の場合に限り返品・交換を承ります。お客様都合の返品は送料お客様負担、商品不良の場合は当店負担です。",
  },
  {
    q: "会員登録は必要ですか？",
    a: "ゲスト購入も可能ですが、会員登録いただくとお気に入り保存や注文履歴の確認が便利です。",
  },
  {
    q: "どのような支払い方法がありますか？",
    a: "クレジットカード、銀行振込、Apple Pay、代金引換に対応しています。",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "ご利用ガイド", href: "/guide" },
          { label: "よくあるご質問" },
        ]}
      />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">FAQ</p>
        <h1 className="mt-2 font-serif text-3xl text-text">よくあるご質問</h1>
      </div>

      <ul className="space-y-4">
        {faqs.map((faq) => (
          <li key={faq.q} className="rounded-sm border border-[#e8e2d9] px-5 py-5">
            <h2 className="font-medium text-text">Q. {faq.q}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">A. {faq.a}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm text-[#6b6b6b]">
        解決しない場合は{" "}
        <Link href="/contact" className="text-accent-1 underline-offset-2 hover:underline">
          お問い合わせ
        </Link>
        よりご連絡ください。
      </p>
    </div>
  );
}
