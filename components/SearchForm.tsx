"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { categories } from "@/lib/data/categories";
import { scenes } from "@/lib/data/scenes";

type SearchFormProps = {
  initialQ?: string;
  initialCategory?: string;
  initialScene?: string;
  initialMinPrice?: string;
  initialMaxPrice?: string;
};

export default function SearchForm({
  initialQ = "",
  initialCategory = "",
  initialScene = "",
  initialMinPrice = "",
  initialMaxPrice = "",
}: SearchFormProps) {
  const router = useRouter();
  const [q, setQ] = useState(initialQ);
  const [category, setCategory] = useState(initialCategory);
  const [scene, setScene] = useState(initialScene);
  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (category) params.set("category", category);
    if (scene) params.set("scene", scene);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    const query = params.toString();
    router.push(query ? `/search?${query}` : "/search");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm bg-[#f1ede7] p-5 md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <label className="block text-sm md:col-span-2 lg:col-span-3">
          <span className="mb-1.5 block text-[#6b6b6b]">キーワード</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="商品名、素材など"
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-[#6b6b6b]">カテゴリ</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
          >
            <option value="">すべて</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-[#6b6b6b]">利用シーン</span>
          <select
            value={scene}
            onChange={(e) => setScene(e.target.value)}
            className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
          >
            <option value="">すべて</option>
            {scenes.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm">
            <span className="mb-1.5 block text-[#6b6b6b]">価格（下限）</span>
            <input
              type="number"
              min={0}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-[#6b6b6b]">価格（上限）</span>
            <input
              type="number"
              min={0}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="150000"
              className="w-full rounded-sm border border-[#d9d2c8] bg-main px-3 py-2.5 outline-none focus:border-accent-1"
            />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-sm bg-accent-1 px-6 py-2.5 text-sm text-white transition-colors hover:bg-accent-1-hover"
        >
          検索する
        </button>
        <button
          type="button"
          onClick={() => {
            setQ("");
            setCategory("");
            setScene("");
            setMinPrice("");
            setMaxPrice("");
            router.push("/search");
          }}
          className="rounded-sm border border-[#d9d2c8] px-6 py-2.5 text-sm text-text transition-colors hover:bg-main"
        >
          条件をクリア
        </button>
      </div>
    </form>
  );
}
