import Image from "next/image";
import Link from "next/link";
import type { Scene } from "@/lib/data/scenes";

type SceneBannerProps = {
  scene: Scene;
};

export default function SceneBanner({ scene }: SceneBannerProps) {
  return (
    <Link
      href={scene.href}
      className="group relative block aspect-4/3 overflow-hidden"
    >
      <Image
        src={scene.image}
        alt={scene.name}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-5">
        <h3 className="font-serif text-lg md:text-xl">{scene.name}</h3>
        <p className="mt-1 text-xs text-white/85 md:text-sm">{scene.description}</p>
      </div>
    </Link>
  );
}
