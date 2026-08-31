export type Feature = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
  body: string[];
  relatedProductIds: string[];
};

export const features: Feature[] = [
  {
    slug: "sofa-guide",
    title: "失敗しないソファの選び方",
    excerpt: "サイズ・座り心地・生地のポイントをわかりやすく解説します。",
    image: "/images/features/sofa-guide.jpg",
    href: "/feature/sofa-guide",
    date: "2026.06.05",
    body: [
      "ソファはリビングの主役。一度選ぶと長く付き合う家具だからこそ、「なんとなく」ではなくポイントを押さえて選びたいものです。",
      "まず確認したいのはサイズ。部屋の間取りに対して、通路が60cm以上確保できるかを意識すると圧迫感を抑えられます。2.5人掛けは一人暮らし〜二人暮らしにも取り入れやすいサイズ感です。",
      "次に座り心地。浅めの座面は姿勢が保ちやすく、深めの座面はリラックス向き。来客が多い家庭は前者、ゆったり過ごしたい方は後者が向いています。",
      "生地は、お手入れしやすさで選ぶのがおすすめ。小さなお子さまやペットがいる場合は、汚れが落ちやすいファブリックを選ぶと安心です。",
    ],
    relatedProductIds: [
      "kd-modulia1as",
      "kd-moduliacuset",
      "kd-modulia25sset",
      "smi-lustre1420r",
    ],
  },
  {
    slug: "one-room-layout",
    title: "一人暮らしのレイアウト術",
    excerpt: "限られた空間でも心地よく過ごせる配置のヒント。",
    image: "/images/features/one-room-layout.jpg",
    href: "/feature/one-room-layout",
    date: "2026.06.04",
    body: [
      "一人暮らしの部屋づくりで大切なのは、「詰め込みすぎないこと」。必要な家具を厳選し、余白を残すことで、狭くても居心地のよい空間になります。",
      "動線を意識して家具を置くと、毎日のストレスが減ります。入口から窓、ベッド、デスクまでの流れを妨げない配置を心がけましょう。",
      "低い家具を中心にすると視線が通り、部屋が広く感じられます。ローボードやサイドテーブルを取り入れるのもおすすめです。",
      "最後に、照明とラグで「居場所」をつくりましょう。あかりの色温度を少し暖色寄りにすると、帰宅後のくつろぎ感が高まります。",
    ],
    relatedProductIds: [
      "oc-ch-ym15",
      "kim-orv90d3set",
      "spi-salp-0004",
      "sgt-wav957802",
    ],
  },
  {
    slug: "bed-size",
    title: "ベッドサイズの選び方",
    excerpt: "シングルからキングまで、暮らしに合うサイズの見極め方。",
    image: "/images/features/bed-size.jpg",
    href: "/feature/bed-size",
    date: "2026.06.02",
    body: [
      "ベッドは一日の終わりを支える家具。サイズ選びを間違えると、睡眠の質にも影響します。",
      "一人暮らしで部屋がコンパクトな場合はシングル、ゆとりを持ちたい方や身長が高めの方はセミダブルが候補になります。",
      "二人で使うならダブル以上が安心。ただし寝室の幅に対して、ベッド脇の通路を左右どちらか最低でも40cm以上確保できるかも確認してください。",
      "フレームの高さも重要です。低いベッドは開放感があり、収納付きや脚高めのタイプは掃除のしやすさが魅力です。暮らし方に合わせて選びましょう。",
    ],
    relatedProductIds: [
      "grt-2wolte2-2-d",
      "ha-wb-7721s",
      "grt-berio-sd",
      "grt-2wolte-s",
    ],
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((feature) => feature.slug === slug);
}
