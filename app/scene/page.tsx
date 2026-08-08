import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { scenes } from "@/lib/data/scenes";

export const metadata: Metadata = {
  title: "利用シーンから探す",
  description:
    "リビング、ダイニング・キッチン、寝室、書斎・オフィス。過ごし方から家具を探せます。",
};

export default function SceneIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "利用シーン" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">SCENE</p>
        <h1 className="mt-2 font-serif text-3xl text-text md:text-4xl">
          利用シーンから探す
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6b6b6b] md:text-base">
          部屋づくりの最初の1歩として、過ごし方からアイテムを選べます。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {scenes.map((scene) => (
          <Link
            key={scene.slug}
            href={scene.href}
            className="group relative block aspect-4/3 overflow-hidden"
          >
            <Image
              src={scene.image}
              alt={scene.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
              <h2 className="font-serif text-2xl">{scene.name}</h2>
              <p className="mt-2 text-sm text-white/90">{scene.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
