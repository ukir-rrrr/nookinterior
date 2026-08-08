import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { getNewsById, newsItems } from "@/lib/data/news";

export function generateStaticParams() {
  return newsItems.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getNewsById(id);
  if (!item) return { title: "お知らせが見つかりません" };
  return { title: item.title };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getNewsById(id);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "お知らせ", href: "/news" },
          { label: item.title },
        ]}
      />

      <header className="mt-8 border-b border-[#e8e2d9] pb-8">
        <time className="text-sm text-[#6b6b6b]" dateTime={item.date.replace(/\./g, "-")}>
          {item.date}
        </time>
        <h1 className="mt-3 font-serif text-2xl text-text md:text-3xl">{item.title}</h1>
      </header>

      {item.image ? (
        <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-sm">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <div className="mt-8 space-y-5 text-sm leading-relaxed text-[#6b6b6b] md:text-base">
        {item.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/news"
          className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-6 py-3 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
        >
          お知らせ一覧へ
        </Link>
      </div>
    </article>
  );
}
