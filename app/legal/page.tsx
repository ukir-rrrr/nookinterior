import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { companyInfo, legalInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示",
  description: "特定商取引法に基づく表記です。",
};

const rows = [
  ["販売業者", companyInfo.name],
  ["運営責任者", companyInfo.representative],
  ["所在地", companyInfo.address],
  ["電話番号", companyInfo.phone],
  ["メールアドレス", companyInfo.email],
  ["販売価格", legalInfo.price],
  ["商品代金以外の必要料金", legalInfo.shipping],
  ["お支払い方法", legalInfo.payment],
  ["商品の引き渡し時期", legalInfo.delivery],
  ["返品・交換について", legalInfo.returns],
];

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "特定商取引法に基づく表示" }]}
      />

      <div className="mt-8 mb-10">
        <h1 className="font-serif text-3xl text-text">特定商取引法に基づく表示</h1>
      </div>

      <dl className="divide-y divide-[#e8e2d9] border-y border-[#e8e2d9] text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
            <dt className="text-[#6b6b6b]">{label}</dt>
            <dd className="leading-relaxed text-text">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
