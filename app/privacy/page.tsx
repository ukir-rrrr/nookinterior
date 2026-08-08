import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { companyInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "個人情報の取り扱いに関する方針です。",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "プライバシーポリシー" }]}
      />

      <div className="mt-8 mb-10">
        <h1 className="font-serif text-3xl text-text">プライバシーポリシー</h1>
      </div>

      <div className="space-y-8 text-sm leading-relaxed text-[#6b6b6b]">
        <section>
          <h2 className="font-serif text-xl text-text">1. 個人情報の取得</h2>
          <p className="mt-3">
            {companyInfo.shopName}（以下「当店」）は、お買い物、会員登録、お問い合わせの際に、
            氏名、住所、電話番号、メールアドレス等の個人情報を取得します。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">2. 利用目的</h2>
          <p className="mt-3">
            取得した個人情報は、商品の配送、ご注文確認、お問い合わせ対応、サービス改善のために利用します。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">3. 第三者提供</h2>
          <p className="mt-3">
            法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。
            配送等に必要な範囲で業務委託先へ預託する場合があります。
          </p>
        </section>
        <section>
          <h2 className="font-serif text-xl text-text">4. お問い合わせ</h2>
          <p className="mt-3">
            個人情報の取り扱いに関するお問い合わせは、{companyInfo.email} までご連絡ください。
          </p>
        </section>
      </div>
    </div>
  );
}
