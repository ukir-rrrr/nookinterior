"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import Breadcrumb from "@/components/Breadcrumb";
import { ORDER_STORAGE_KEY, type OrderSummary } from "@/lib/cart/order";
import { formatPrice } from "@/lib/data/products";

const demoOrders = [
  {
    orderId: "NK20260601-1001",
    createdAt: "2026-06-01T10:00:00.000Z",
    total: 80680,
    status: "発送済み",
  },
];

export default function OrdersPage() {
  const router = useRouter();
  const { user, ready } = useAuth();
  const [latestOrder, setLatestOrder] = useState<OrderSummary | null>(null);

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(ORDER_STORAGE_KEY);
      if (raw) setLatestOrder(JSON.parse(raw) as OrderSummary);
    } catch {
      setLatestOrder(null);
    }
  }, []);

  if (!ready || !user) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <p className="text-sm text-[#6b6b6b]">読み込み中...</p>
      </div>
    );
  }

  const orders = [
    ...(latestOrder
      ? [
          {
            orderId: latestOrder.orderId,
            createdAt: latestOrder.createdAt,
            total: latestOrder.total,
            status: "受付完了",
          },
        ]
      : []),
    ...demoOrders,
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-16">
      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "マイページ", href: "/mypage" },
          { label: "注文履歴" },
        ]}
      />

      <div className="mt-8 mb-10">
        <p className="text-xs tracking-[0.2em] text-accent-2">ORDERS</p>
        <h1 className="mt-2 font-serif text-3xl text-text">注文履歴</h1>
      </div>

      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order.orderId}
            className="rounded-sm border border-[#e8e2d9] bg-main px-5 py-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[#6b6b6b]">
                  {new Date(order.createdAt).toLocaleDateString("ja-JP")}
                </p>
                <p className="mt-1 font-medium text-text">{order.orderId}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-accent-2">{order.status}</p>
                <p className="mt-1 text-accent-1">{formatPrice(order.total)}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          href="/mypage"
          className="text-sm text-accent-1 underline-offset-2 hover:underline"
        >
          マイページへ戻る
        </Link>
      </div>
    </div>
  );
}
