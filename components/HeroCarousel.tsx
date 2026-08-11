"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/common/hero_01.jpg",
    eyebrow: "roomy",
    title: "暮らしに、心地いい居場所を。",
    description: "ソファから雑貨まで。部屋づくりの最初の1歩を。",
    ctaLabel: "商品を見る",
    ctaHref: "/newarrival",
  },
  {
    id: 2,
    image: "/images/common/hero_02.jpg",
    eyebrow: "OPEN CAMPAIGN",
    title: "オープン記念、送料無料。",
    description: "22,000円（税込）以上で全国送料無料。",
    ctaLabel: "キャンペーンを見る",
    ctaHref: "/news/20260603",
  },
  {
    id: 3,
    image: "/images/common/scene_living.jpg",
    eyebrow: "SCENE",
    title: "リビングを整える。",
    description: "くつろぎの時間をつくる家具をセレクト。",
    ctaLabel: "リビングを見る",
    ctaHref: "/scene/living",
  },
  {
    id: 4,
    image: "/images/common/about.jpg",
    eyebrow: "FEATURE",
    title: "失敗しないソファの選び方",
    description: "サイズ・座り心地・生地のポイントを解説。",
    ctaLabel: "特集を読む",
    ctaHref: "/feature/sofa-guide",
  },
];

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="hero-carousel relative w-full overflow-hidden bg-[#efeae3] py-3 sm:py-4 md:py-6" aria-label="ヒーロー">
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides
        loop
        speed={700}
        spaceBetween={12}
        slidesPerView={1.08}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          480: { slidesPerView: 1.12, spaceBetween: 14 },
          768: { slidesPerView: 1.28, spaceBetween: 20 },
          1024: { slidesPerView: 1.45, spaceBetween: 28 },
          1280: { slidesPerView: 1.55, spaceBetween: 32 },
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Link
              href={slide.ctaHref}
              className="group relative block aspect-4/3 overflow-hidden sm:aspect-16/10 md:aspect-21/9"
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 95vw, (max-width: 1024px) 85vw, 70vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-black/10" />
              <div className="absolute inset-0 flex items-end md:items-center">
                <div className="w-full px-4 py-6 text-white sm:px-6 sm:py-8 md:px-12 md:py-10 lg:px-16">
                  <p className="mb-2 font-serif text-[10px] tracking-[0.2em] text-white/90 sm:text-xs md:text-sm">
                    {slide.eyebrow}
                  </p>
                  <h2 className="max-w-[16em] font-serif text-xl leading-snug tracking-tight break-keep sm:max-w-none sm:text-2xl sm:leading-tight md:whitespace-nowrap md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-white/90 sm:mt-3 sm:text-sm md:mt-4 md:text-base">
                    {slide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center justify-center rounded-sm bg-accent-1 px-4 py-2 text-xs transition-colors group-hover:bg-accent-1-hover sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm md:mt-7">
                    {slide.ctaLabel}
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-1 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:left-[2%] sm:h-11 sm:w-11 md:left-[8%] md:h-12 md:w-12"
        aria-label="前のスライド"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-1 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40 sm:right-[2%] sm:h-11 sm:w-11 md:right-[8%] md:h-12 md:w-12"
        aria-label="次のスライド"
      >
        <ChevronRight />
      </button>
    </section>
  );
}
