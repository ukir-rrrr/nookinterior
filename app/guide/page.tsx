import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { legalInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "ご利用ガイド",
  description: "ご注文から配送、返品までのご案内です。",
};

const sections = [
  {
    title: "ご注文方法",
    body: "商品詳細ページでカラー・サイズ・数量を選択し、カートに追加してください。カート画面からご購入手続きへお進みいただけます。",
  },
  {
    title: "お支払い",
    body: `対応決済：${legalInfo.payment}。本番環境では KOMOJU での決済を想定しています。`,
  },
  {
    title: "送料・配送",
    body: `${legalInfo.shipping}。${legalInfo.delivery}`,
  },
  {
    title: "返品・交換",
    body: legalInfo.returns,
  },
];

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "ご利用ガイド" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">GUIDE</p>
        <h1 className="mt-2 font-serif text-3xl text-text">ご利用ガイド</h1>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-xl text-text">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">{section.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/guide/faq"
          className="rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
        >
          よくあるご質問
        </Link>
        <Link
          href="/contact"
          className="rounded-sm bg-accent-1 px-5 py-2.5 text-sm text-white transition-colors hover:bg-accent-1-hover"
        >
          お問い合わせ
        </Link>
      </div>
    </div>
  );
}
