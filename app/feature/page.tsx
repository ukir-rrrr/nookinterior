import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { features } from "@/lib/data/features";

export const metadata: Metadata = {
  title: "特集",
  description: "部屋づくりのヒントになる特集記事一覧です。",
};

export default function FeatureIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "特集" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">FEATURE</p>
        <h1 className="mt-2 font-serif text-3xl text-text md:text-4xl">特集</h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          ソファの選び方やレイアウトなど、部屋づくりのヒントを集めました。
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Link key={feature.slug} href={feature.href} className="group block">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-xs text-[#6b6b6b]">{feature.date}</p>
            <h2 className="mt-2 font-serif text-lg text-text group-hover:text-accent-1">
              {feature.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">
              {feature.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
