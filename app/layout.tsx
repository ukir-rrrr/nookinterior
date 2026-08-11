import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import { AuthProvider } from "@/components/AuthProvider";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "roomy｜暮らしに、心地いい居場所を。",
    template: "%s｜roomy",
  },
  description:
    "roomy（ルーミー）は、利用シーンから探す家具・インテリアのセレクトショップです。ソファから雑貨まで、部屋づくりの最初の1歩を提案します。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon_v1.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-32_v1.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/images/apple-touch-icon_v1.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${zenOldMincho.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-main font-sans text-text">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
