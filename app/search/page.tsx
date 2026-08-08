import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";
import { searchProducts } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "検索結果",
  description: "キーワード、カテゴリ、利用シーン、価格帯で商品を探せます。",
};

function toNumber(value: string | string[] | undefined): number | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return undefined;
  const num = Number(raw);
  return Number.isFinite(num) ? num : undefined;
}

function toStringValue(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string | string[];
    category?: string | string[];
    scene?: string | string[];
    minPrice?: string | string[];
    maxPrice?: string | string[];
  }>;
}) {
  const params = await searchParams;
  const q = toStringValue(params.q);
  const category = toStringValue(params.category);
  const scene = toStringValue(params.scene);
  const minPrice = toStringValue(params.minPrice);
  const maxPrice = toStringValue(params.maxPrice);

  const results = searchProducts({
    q,
    category: category || undefined,
    scene: scene || undefined,
    minPrice: toNumber(params.minPrice),
    maxPrice: toNumber(params.maxPrice),
  });

  const hasQuery = Boolean(q || category || scene || minPrice || maxPrice);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "検索結果" }]} />

      <div className="mt-8 mb-8">
        <p className="text-xs tracking-[0.2em] text-accent-2">SEARCH</p>
        <h1 className="mt-2 font-serif text-3xl text-text md:text-4xl">商品を探す</h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          キーワードに加え、カテゴリ・利用シーン・価格帯で絞り込めます。
        </p>
      </div>

      <SearchForm
        initialQ={q}
        initialCategory={category}
        initialScene={scene}
        initialMinPrice={minPrice}
        initialMaxPrice={maxPrice}
      />

      <div className="mt-10">
        <p className="mb-6 text-sm text-[#6b6b6b]">
          {hasQuery ? (
            <>
              検索結果 <span className="font-medium text-text">{results.length}</span> 件
              {q ? (
                <>
                  （「<span className="text-text">{q}</span>」）
                </>
              ) : null}
            </>
          ) : (
            <>
              全 <span className="font-medium text-text">{results.length}</span> 件の商品
            </>
          )}
        </p>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="font-serif text-xl text-text">該当する商品がありません</p>
            <p className="mt-3 text-sm text-[#6b6b6b]">
              条件を変更して、もう一度お試しください。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
