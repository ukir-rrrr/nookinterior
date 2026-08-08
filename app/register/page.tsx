"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useAuth } from "@/components/AuthProvider";
import Breadcrumb from "@/components/Breadcrumb";

const PASSWORD_MIN_LENGTH = 8;

export default function RegisterPage() {
  const router = useRouter();
  const { register, user, ready } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (ready && user) router.replace("/mypage");
  }, [ready, user, router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (password.length < PASSWORD_MIN_LENGTH) {
      setError(`パスワードは${PASSWORD_MIN_LENGTH}文字以上で入力してください。`);
      return;
    }
    if (password !== passwordConfirm) {
      setError("パスワードが一致しません。");
      return;
    }

    register({ name, email });
    router.push("/mypage");
  };

  return (
    <div className="mx-auto max-w-md px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb items={[{ label: "TOP", href: "/" }, { label: "新規会員登録" }]} />

      <div className="mt-8 mb-8">
        <p className="text-xs tracking-[0.2em] text-accent-2">REGISTER</p>
        <h1 className="mt-2 font-serif text-3xl text-text">新規会員登録</h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">
          ポイント還元やお気に入り保存など、会員限定の特典をご利用いただけます。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-text">お名前</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="山田 太郎"
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none placeholder:text-[#b0b0b0] focus:border-accent-1"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-text">メールアドレス</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none placeholder:text-[#b0b0b0] focus:border-accent-1"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-text">パスワード</span>
          <input
            required
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={PASSWORD_MIN_LENGTH}
            placeholder={`${PASSWORD_MIN_LENGTH}文字以上`}
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none placeholder:text-[#b0b0b0] focus:border-accent-1"
          />
          <span className="mt-1.5 block text-xs leading-relaxed text-[#6b6b6b]">
            半角英数字{PASSWORD_MIN_LENGTH}文字以上で入力してください
          </span>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-text">パスワード（確認）</span>
          <input
            required
            type="password"
            name="passwordConfirm"
            autoComplete="new-password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            minLength={PASSWORD_MIN_LENGTH}
            placeholder="もう一度入力"
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none placeholder:text-[#b0b0b0] focus:border-accent-1"
          />
        </label>

        {error ? (
          <p className="rounded-sm border border-[#e8b4a8] bg-[#fdf3ee] px-3 py-2 text-sm text-accent-1" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          className="w-full rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover"
        >
          会員登録する
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6b6b6b]">
        すでにアカウントをお持ちの方は{" "}
        <Link href="/login" className="text-accent-1 underline-offset-2 hover:underline">
          ログイン
        </Link>
      </p>
    </div>
  );
}
