import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import ProductPurchasePanel from "@/components/ProductPurchasePanel";
import RelatedProducts from "@/components/RelatedProducts";
import { getCategoryBySlug } from "@/lib/data/categories";
import {
  getAverageRating,
  getProductById,
  getRelatedProducts,
  products,
} from "@/lib/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return { title: "商品が見つかりません" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-accent-1" aria-label={`${rating}点`}>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index < Math.round(rating);
        return (
          <span key={index} aria-hidden>
            {filled ? "★" : "☆"}
          </span>
        );
      })}
    </span>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product, 4);
  const averageRating = getAverageRating(product);

  return (
    <div className="pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-8 md:px-6">
        <Breadcrumb
          items={[
            { label: "TOP", href: "/" },
            {
              label: category?.name ?? "カテゴリ",
              href: category?.href,
            },
            { label: product.name },
          ]}
        />

        <div className="mt-6 grid gap-8 md:mt-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery images={product.images} name={product.name} />
          <ProductPurchasePanel product={product} />
        </div>

        {/* 商品説明 */}
        <section className="mt-16 grid gap-8 border-t border-[#e8e2d9] pt-12 md:grid-cols-3 md:gap-10">
          <div className="md:col-span-2">
            <h2 className="font-serif text-xl text-text md:text-2xl">商品説明</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6b6b6b] md:text-base">
              {product.description}
            </p>
          </div>
          <dl className="space-y-4 rounded-sm bg-[#f1ede7] p-5 text-sm">
            <div>
              <dt className="font-medium text-text">素材</dt>
              <dd className="mt-1 text-[#6b6b6b]">{product.material}</dd>
            </div>
            <div>
              <dt className="font-medium text-text">サイズ</dt>
              <dd className="mt-1 text-[#6b6b6b]">{product.sizeInfo}</dd>
            </div>
            <div>
              <dt className="font-medium text-text">カテゴリ</dt>
              <dd className="mt-1 text-[#6b6b6b]">{category?.name ?? product.categorySlug}</dd>
            </div>
          </dl>
        </section>

        {/* レビュー */}
        <section className="mt-16 border-t border-[#e8e2d9] pt-12 pb-16 md:pb-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-xl text-text md:text-2xl">レビュー</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-[#6b6b6b]">
                <StarRating rating={averageRating} />
                <span>
                  {averageRating.toFixed(1)}（{product.reviews.length}件）
                </span>
              </p>
            </div>
          </div>
          <ul className="space-y-6">
            {product.reviews.map((review) => (
              <li
                key={review.id}
                className="rounded-sm border border-[#e8e2d9] bg-main px-5 py-5"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <StarRating rating={review.rating} />
                  <span className="font-medium text-text">{review.author}</span>
                  <time className="text-[#6b6b6b]" dateTime={review.date.replace(/\./g, "-")}>
                    {review.date}
                  </time>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                  {review.comment}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <RelatedProducts
        products={related}
        categoryHref={category?.href ?? "/"}
      />
    </div>
  );
}
