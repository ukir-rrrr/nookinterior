export type NewsItem = {
  id: string;
  date: string;
  title: string;
  href: string;
  hasImage?: boolean;
  image?: string;
  body: string[];
};

export const newsItems: NewsItem[] = [
  {
    id: "20260608",
    date: "2026.06.08",
    title: "新作照明・ファブリック入荷のお知らせ",
    href: "/news/20260608",
    hasImage: true,
    image: "/images/products/lighting/01.jpg",
    body: [
      "新作のペンダントライトとラグ・ファブリックが入荷しました。",
      "やわらかな光を広げるリネンシェードの照明や、足元を心地よく整えるウールラグなど、夏の模様替えにぴったりのアイテムを揃えています。",
      "詳細は各商品ページよりご確認ください。",
    ],
  },
  {
    id: "20260603",
    date: "2026.06.03",
    title: "オープン記念送料無料キャンペーンのご案内",
    href: "/news/20260603",
    hasImage: true,
    image: "/images/common/hero_02.jpg",
    body: [
      "roomy オープンを記念して、送料無料キャンペーンを実施中です。",
      "税込22,000円以上のご購入で、全国送料無料（大型家具は別途送料が発生する場合があります）。",
      "期間や条件の詳細は、今後のお知らせでもご案内します。この機会にぜひお買い求めください。",
    ],
  },
  {
    id: "20260601",
    date: "2026.06.01",
    title: "ショップオープンのお知らせ",
    href: "/news/20260601",
    body: [
      "本日、roomy（ルーミー）をオープンいたしました。",
      "「暮らしに、心地いい居場所を。」をコンセプトに、ソファから雑貨まで、部屋づくりの最初の1歩となるアイテムをセレクトしてお届けします。",
      "今後ともどうぞよろしくお願いいたします。",
    ],
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}
