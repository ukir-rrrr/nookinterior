import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import { features, getFeatureBySlug } from "@/lib/data/features";
import { getProductById } from "@/lib/data/products";

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return { title: "特集が見つかりません" };
  return {
    title: feature.title,
    description: feature.excerpt,
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const relatedProducts = feature.relatedProductIds
    .map((id) => getProductById(id))
    .filter((product) => product != null);

  return (
    <article className="pb-16 md:pb-20">
      <div className="relative aspect-21/9 min-h-56 w-full md:min-h-80">
        <Image
          src={feature.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-3xl px-4 pb-8 md:px-6 md:pb-10">
            <p className="text-xs tracking-[0.2em] text-white/80">FEATURE</p>
            <h1 className="mt-2 font-serif text-3xl text-white md:text-4xl">
              {feature.title}
            </h1>
            <p className="mt-3 text-sm text-white/85">{feature.date}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pt-8 md:px-6">
        <Breadcrumb
          items={[
            { label: "TOP", href: "/" },
            { label: "特集", href: "/feature" },
            { label: feature.title },
          ]}
        />

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-[#6b6b6b] md:text-base">
          {feature.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {relatedProducts.length > 0 ? (
          <section className="mt-16 border-t border-[#e8e2d9] pt-12">
            <h2 className="font-serif text-xl text-text md:text-2xl">
              あわせて見たい商品
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12 text-center">
          <Link
            href="/feature"
            className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-6 py-3 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
          >
            特集一覧へ
          </Link>
        </div>
      </div>
    </article>
  );
}
