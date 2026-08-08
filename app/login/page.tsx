"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "@/components/AuthProvider";
import Breadcrumb from "@/components/Breadcrumb";

export default function LoginPage() {
  const router = useRouter();
  const { login, user, ready } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (ready && user) router.replace("/mypage");
  }, [ready, user, router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = email.split("@")[0] || "ゲスト";
    login({ name, email });
    router.push("/mypage");
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "ログイン" }]} />

      <div className="mt-8 mb-8">
        <p className="text-xs tracking-[0.2em] text-accent-2">LOGIN</p>
        <h1 className="mt-2 font-serif text-3xl text-text">ログイン</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm">
          <span className="mb-1.5 block text-[#6b6b6b]">メールアドレス</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block text-[#6b6b6b]">パスワード</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={4}
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
        >
          ログイン
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6b6b6b]">
        アカウントをお持ちでない方は{" "}
        <Link href="/register" className="text-accent-1 underline-offset-2 hover:underline">
          新規会員登録
        </Link>
      </p>
    </div>
  );
}
