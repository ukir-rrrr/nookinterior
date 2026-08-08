"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          subject: String(data.get("subject") || ""),
          message: String(data.get("message") || ""),
        }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!json.ok) {
        setError(json.error || "送信に失敗しました");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
    } catch {
      setError("通信エラーが発生しました");
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-accent-2 bg-[#f3f6f1] px-5 py-6 text-sm text-text">
        お問い合わせを受け付けました。内容を確認のうえ、ご連絡いたします。
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm">
        <span className="mb-1.5 block text-[#6b6b6b]">お名前</span>
        <input
          required
          name="name"
          maxLength={80}
          autoComplete="name"
          className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block text-[#6b6b6b]">メールアドレス</span>
        <input
          required
          type="email"
          name="email"
          maxLength={254}
          autoComplete="email"
          className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block text-[#6b6b6b]">件名</span>
        <input
          required
          name="subject"
          maxLength={120}
          className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1.5 block text-[#6b6b6b]">お問い合わせ内容</span>
        <textarea
          required
          name="message"
          rows={6}
          maxLength={2000}
          className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
        />
      </label>
      {error ? (
        <p
          role="alert"
          className="rounded-sm border border-[#d9a39a] bg-[#fdf3f1] px-4 py-3 text-sm text-[#8a3b2e]"
        >
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="rounded-sm bg-accent-1 px-6 py-3 text-sm text-white transition-colors hover:bg-accent-1-hover disabled:opacity-60"
      >
        {submitting ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}
