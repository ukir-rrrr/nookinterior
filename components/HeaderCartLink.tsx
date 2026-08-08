"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        d="M3 3h2l1.6 9.6a2 2 0 002 1.7h8.7a2 2 0 001.98-1.7L21 7H7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="19.5" r="1.5" />
      <circle cx="17.5" cy="19.5" r="1.5" />
    </svg>
  );
}

export default function HeaderCartLink() {
  const { itemCount, ready } = useCart();

  return (
    <Link
      href="/cart"
      className="relative rounded-sm p-2 text-text hover:bg-[#f5f5f5]"
      aria-label={ready && itemCount > 0 ? `カート（${itemCount}点）` : "カート"}
    >
      <CartIcon />
      {ready && itemCount > 0 ? (
        <span className="absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-1 px-1 text-[10px] text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      ) : null}
    </Link>
  );
}
