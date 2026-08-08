"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const activeImage = images[activeIndex] ?? images[0];

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="relative block aspect-4/3 w-full overflow-hidden rounded-sm bg-[#f1ede7]"
        aria-label="画像を拡大表示"
      >
        <Image
          src={activeImage}
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <span className="absolute right-3 bottom-3 rounded-sm bg-black/50 px-2 py-1 text-[10px] tracking-wider text-white">
          拡大
        </span>
      </button>

      {images.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={image}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative aspect-4/3 w-full overflow-hidden rounded-sm border transition-colors ${
                    isActive
                      ? "border-accent-1"
                      : "border-transparent hover:border-[#d9d2c8]"
                  }`}
                  aria-label={`画像 ${index + 1}`}
                  aria-current={isActive}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}

      {zoomed ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="商品画像の拡大表示"
          onClick={() => setZoomed(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-sm bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
            onClick={() => setZoomed(false)}
          >
            閉じる
          </button>
          <div
            className="relative h-[70vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage}
              alt={name}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
