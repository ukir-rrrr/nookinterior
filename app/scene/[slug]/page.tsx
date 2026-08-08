import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { getProductsByScene, type ProductSort } from "@/lib/data/products";
import { getSceneBySlug, scenes } from "@/lib/data/scenes";

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
  return scenes.map((scene) => ({ slug: scene.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scene = getSceneBySlug(slug);
  if (!scene) return { title: "利用シーンが見つかりません" };
  return {
    title: `${scene.name}の家具・インテリア`,
    description: scene.detail,
  };
}

export default async function SceneDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string | string[] }>;
}) {
  const { slug } = await params;
  const { sort: sortParam } = await searchParams;
  const scene = getSceneBySlug(slug);

  if (!scene) {
    notFound();
  }

  const sort = parseSort(sortParam);
  const items = getProductsByScene(slug, sort);

  return (
    <div className="pb-16 md:pb-20">
      <section className="relative overflow-hidden">
        <div className="relative aspect-21/9 min-h-56 w-full md:min-h-72">
          <Image
            src={scene.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-10">
              <p className="mb-2 text-xs tracking-[0.2em] text-white/80">SCENE</p>
              <h1 className="font-serif text-3xl text-white md:text-4xl">
                {scene.name}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                {scene.detail}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 md:px-6">
        <Breadcrumb
          items={[
            { label: "TOP", href: "/" },
            { label: "利用シーン", href: "/scene" },
            { label: scene.name },
          ]}
        />

        <div className="mt-8 flex flex-wrap gap-2" aria-label="利用シーン一覧">
          {scenes.map((item) => {
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

        <div className="mt-10 flex flex-col gap-4 border-b border-[#e8e2d9] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#6b6b6b]">
            <span className="font-medium text-text">{items.length}</span> 件の商品
          </p>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map((option) => {
              const isActive = option.value === sort;
              const href =
                option.value === "recommended"
                  ? `/scene/${slug}`
                  : `/scene/${slug}?sort=${option.value}`;
              return (
                <Link
                  key={option.value}
                  href={href}
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

        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="font-serif text-xl text-text">商品がまだありません</p>
            <Link
              href="/scene"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
            >
              利用シーン一覧へ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
