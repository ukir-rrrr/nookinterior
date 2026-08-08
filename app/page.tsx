import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import RankingSection from "@/components/RankingSection";
import SceneBanner from "@/components/SceneBanner";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/lib/data/categories";
import { features } from "@/lib/data/features";
import { newsItems } from "@/lib/data/news";
import { getNewArrivals, getRecommended } from "@/lib/data/products";
import { scenes } from "@/lib/data/scenes";

export default function Home() {
  const newArrivals = getNewArrivals(4);
  const recommended = getRecommended(4);

  return (
    <>
      <HeroCarousel />

      {/* カテゴリから探す */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="CATEGORY"
            title="カテゴリから探す"
            description="ソファから雑貨まで、必要なアイテムを選びやすくまとめました。"
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={category.href}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-sm">
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 45vw, 18vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-sm text-text group-hover:text-accent-1">
                    {category.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 利用シーンから探す */}
      <section className="bg-[#f1ede7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="SCENE"
            title="利用シーンから探す"
            description="リビング、ダイニング、寝室、書斎。過ごし方から家具を選べます。"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {scenes.map((scene) => (
              <SceneBanner key={scene.slug} scene={scene} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/scene"
              className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
            >
              利用シーン一覧
            </Link>
          </div>
        </div>
      </section>

      {/* 特集 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="FEATURE"
              title="特集"
              description="部屋づくりのヒントになる記事を集めました。"
            />
            <Link
              href="/feature"
              className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
            >
              特集一覧
            </Link>
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
                <h3 className="mt-4 font-serif text-lg text-text group-hover:text-accent-1">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">
                  {feature.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ランキング */}
      <div className="bg-[#f1ede7]">
        <RankingSection />
      </div>

      {/* 新着 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="NEW ARRIVAL"
              title="新着商品"
              description="最近入荷したアイテムをピックアップ。"
            />
            <Link
              href="/newarrival"
              className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
            >
              新着一覧
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* レコメンド */}
      <section className="bg-[#f1ede7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="RECOMMENDED"
            title="おすすめ商品"
            description="長く使える、失敗しにくいセレクト。"
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            {recommended.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* お知らせ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="NEWS" title="お知らせ" />
            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded-sm border border-accent-1 px-5 py-2.5 text-sm text-accent-1 transition-colors hover:bg-accent-1 hover:text-white"
            >
              お知らせ一覧
            </Link>
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
      </section>

      {/* 会員登録案内 */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-sm bg-[#3a3a3a] px-6 py-12 text-center text-white md:px-12 md:py-16">
            <p className="text-xs tracking-[0.2em] text-accent-2">MEMBERSHIP</p>
            <h2 className="mt-3 font-serif text-2xl md:text-3xl">
              会員登録で、もっと心地よく。
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
              ご購入金額のポイント還元、お気に入り保存、注文履歴の確認など。会員限定の特典をご用意しています。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex min-w-44 items-center justify-center rounded-sm bg-accent-1 px-6 py-3 text-sm transition-colors hover:bg-accent-1-hover"
              >
                新規会員登録
              </Link>
              <Link
                href="/login"
                className="inline-flex min-w-44 items-center justify-center rounded-sm border border-white/40 px-6 py-3 text-sm transition-colors hover:bg-white/10"
              >
                ログイン
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
