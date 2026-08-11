import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { newsItems } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "roomy からのお知らせ一覧です。",
};

export default function NewsIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "お知らせ" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">NEWS</p>
        <h1 className="mt-2 font-serif text-3xl text-text md:text-4xl">お知らせ</h1>
      </div>

      <ul className="divide-y divide-[#e8e2d9] border-y border-[#e8e2d9]">
        {newsItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="flex flex-col gap-2 py-5 transition-colors hover:text-accent-1 sm:flex-row sm:items-center sm:gap-8"
            >
              <time className="shrink-0 text-sm text-[#6b6b6b]" dateTime={item.date.replace(/\./g, "-")}>
                {item.date}
              </time>
              <span className="text-sm md:text-base">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
