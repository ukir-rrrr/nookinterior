import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data/products";

type ProductCardProps = {
  product: Product;
  rank?: number;
};

export default function ProductCard({ product, rank }: ProductCardProps) {
  const displayPrice = product.salePrice ?? product.price;
  const hasSale = product.salePrice != null;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block overflow-hidden rounded-sm bg-main transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-[#f1ede7]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew ? (
          <span className="absolute top-3 left-3 rounded-sm bg-accent-2 px-2 py-1 text-[10px] tracking-wider text-white">
            NEW
          </span>
        ) : null}
        {rank != null ? (
          <span className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-sm bg-accent-1 text-xs font-medium text-white">
            {rank}
          </span>
        ) : null}
      </div>
      <div className="space-y-1.5 px-1 py-4">
        <h3 className="line-clamp-2 text-sm leading-relaxed text-text">
          {product.name}
        </h3>
        <p className="text-sm text-accent-1">
          {hasSale ? (
            <>
              <span className="mr-2 text-[#9a9a9a] line-through">
                {formatPrice(product.price)}
              </span>
              <span>{formatPrice(displayPrice)}</span>
            </>
          ) : (
            formatPrice(displayPrice)
          )}
          <span className="ml-1 text-xs text-[#6b6b6b]">（税込）</span>
        </p>
      </div>
    </Link>
  );
}
