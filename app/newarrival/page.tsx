import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getAllNewArrivals } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "新着商品",
  description: "roomy の新着商品一覧。最近入荷した家具・インテリアをチェック。",
};

export default function NewArrivalPage() {
  const items = getAllNewArrivals();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "新着" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">NEW ARRIVAL</p>
        <h1 className="mt-2 font-serif text-3xl text-text md:text-4xl">新着商品</h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          最近入荷したアイテムをピックアップしています。
        </p>
      </div>

      <p className="mb-6 text-sm text-[#6b6b6b]">
        <span className="font-medium text-text">{items.length}</span> 件の商品
      </p>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
