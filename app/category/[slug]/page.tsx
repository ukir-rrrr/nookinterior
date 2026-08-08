import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import {
  getProductsByCategory,
  type ProductSort,
} from "@/lib/data/products";

const sortOptions: { value: ProductSort; label: string }[] = [
  { value: "recommended", label: "おすすめ順" },
  { value: "new", label: "新着順" },
  { value: "price-asc", label: "価格が安い順" },
  { value: "price-desc", label: "価格が高い順" },
];

function parseSort(value: string | string[] | undefined): ProductSort {
  const sort = Array.isArray(value) ? value[0] : value;
  if (
    sort === "recommended" ||
    sort === "new" ||
    sort === "price-asc" ||
    sort === "price-desc"
  ) {
    return sort;
  }
  return "recommended";
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: "カテゴリが見つかりません" };
  }
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string | string[] }>;
}) {
  const { slug } = await params;
  const { sort: sortParam } = await searchParams;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const sort = parseSort(sortParam);
  const items = getProductsByCategory(slug, sort);

  return (
    <div className="pb-16 md:pb-20">
      {/* カテゴリヘッダー */}
      <section className="relative overflow-hidden">
        <div className="relative aspect-21/9 min-h-56 w-full md:min-h-72">
          <Image
            src={category.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-10">
              <p className="mb-2 text-xs tracking-[0.2em] text-white/80">CATEGORY</p>
              <h1 className="font-serif text-3xl text-white md:text-4xl">
                {category.name}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 md:px-6">
        <Breadcrumb
          items={[
            { label: "TOP", href: "/" },
            { label: category.name },
          ]}
        />

        {/* 他カテゴリへの導線 */}
        <div className="mt-8 flex flex-wrap gap-2" aria-label="カテゴリ一覧">
          {categories.map((item) => {
            const isActive = item.slug === slug;
            return (
              <Link
                key={item.slug}
                href={item.href}
                className={`rounded-sm px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-accent-1 text-white"
                    : "bg-[#f1ede7] text-text hover:bg-[#e8e2d9]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* 件数・並び替え */}
        <div className="mt-10 flex flex-col gap-4 border-b border-[#e8e2d9] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6b6b6b]">
            <span className="font-medium text-text">{items.length}</span> 件の商品
          </p>
          <div className="flex flex-wrap gap-2" role="list" aria-label="並び替え">
            {sortOptions.map((option) => {
              const isActive = option.value === sort;
              const href =
                option.value === "recommended"
                  ? `/category/${slug}`
                  : `/category/${slug}?sort=${option.value}`;
              return (
                <Link
                  key={option.value}
                  href={href}
                  role="listitem"
                  className={`rounded-sm px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-accent-2 text-white"
                      : "text-[#6b6b6b] hover:bg-[#f1ede7] hover:text-text"
                  }`}
                >
                  {option.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 商品一覧 */}
        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="font-serif text-xl text-text">商品がまだありません</p>
            <p className="mt-3 text-sm text-[#6b6b6b]">
              他のカテゴリからお探しください。
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
            >
              TOPへ戻る
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
