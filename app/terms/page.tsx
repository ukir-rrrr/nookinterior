import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { companyInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "ご利用規約",
  description: "roomy のご利用規約です。",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "ご利用規約" }]} />

      <div className="mt-8 mb-10">
        <h1 className="font-serif text-3xl text-text">ご利用規約</h1>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-[#6b6b6b]">
        <section>
          <h2 className="font-serif text-xl text-text">1. 適用</h2>
          <p className="mt-3">
            本規約は、{companyInfo.shopName} が提供するオンラインショップの利用に関する条件を定めるものです。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">2. 会員登録</h2>
          <p className="mt-3">
            会員は正確な情報を登録するものとし、登録情報に変更が生じた場合は速やかに更新してください。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">3. 注文・契約</h2>
          <p className="mt-3">
            ご注文後、当店が注文を承諾した時点で売買契約が成立します。在庫状況等によりご注文をお受けできない場合があります。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">4. 禁止事項</h2>
          <p className="mt-3">
            法令または公序良俗に反する行為、当店や第三者の権利を侵害する行為、サービスの運営を妨げる行為を禁止します。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">5. 規約の変更</h2>
          <p className="mt-3">
            当店は必要に応じて本規約を変更できるものとし、変更後の規約は本サイトに掲載した時点から効力を生じます。
          </p>
        </section>
      </div>
    </div>
  );
}
