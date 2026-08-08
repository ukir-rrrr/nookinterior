import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import type { Product } from "@/lib/data/products";

type RelatedProductsProps = {
  products: Product[];
  categoryHref: string;
};

export default function RelatedProducts({
  products,
  categoryHref,
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="border-t border-[#e8e2d9] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="RELATED"
            title="関連商品"
            description="同じカテゴリのアイテムもあわせてご覧ください。"
          />
          <Link
            href={categoryHref}
            className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
          >
            カテゴリ一覧へ
          </Link>
        </div>
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-4 md:gap-8 md:overflow-visible md:px-0">
          {products.map((product) => (
            <div key={product.id} className="w-56 shrink-0 md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
