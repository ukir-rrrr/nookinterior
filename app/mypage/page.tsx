"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/components/AuthProvider";
import Breadcrumb from "@/components/Breadcrumb";

const links = [
  { href: "/mypage/orders", label: "注文履歴", description: "過去のご注文を確認" },
  { href: "/mypage/favorite", label: "お気に入り", description: "保存した商品一覧" },
  { href: "/guide", label: "ご利用ガイド", description: "配送・返品などの案内" },
  { href: "/contact", label: "お問い合わせ", description: "サポートへのご連絡" },
];

export default function MyPage() {
  const router = useRouter();
  const { user, ready, logout } = useAuth();

  useEffect(() => {
    if (ready && !user) {
      router.replace("/login");
    }
  }, [ready, user, router]);

  if (!ready || !user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <p className="text-sm text-[#6b6b6b]">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "マイページ" }]} />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">MY PAGE</p>
        <h1 className="mt-2 font-serif text-3xl text-text">マイページ</h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          {user.name} さん（{user.email}）
        </p>
        <p className="mt-2 text-xs text-[#6b6b6b]">
          デモ会員（DB未使用）／ブラウザを閉じるとログイン状態は解除されます
        </p>
      </div>

      <ul className="divide-y divide-[#e8e2d9] border-y border-[#e8e2d9]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent-1"
            >
              <span>
                <span className="block text-base text-text">{link.label}</span>
                <span className="mt-1 block text-sm text-[#6b6b6b]">
                  {link.description}
                </span>
              </span>
              <span aria-hidden className="text-[#c4bbb0]">
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => {
          logout();
          router.push("/");
        }}
        className="mt-10 rounded-sm border border-[#d9d2c8] px-6 py-3 text-sm text-text transition-colors hover:bg-[#f1ede7]"
      >
        ログアウト
      </button>
    </div>
  );
}
