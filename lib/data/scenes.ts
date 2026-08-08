export type Scene = {
  slug: string;
  name: string;
  href: string;
  image: string;
  description: string;
  detail: string;
};

export const scenes: Scene[] = [
  {
    slug: "living",
    name: "リビング",
    href: "/scene/living",
    image: "/images/common/scene_living.jpg",
    description: "くつろぎの時間をつくる家具",
    detail:
      "ソファ、テーブル、ラグ、照明など。家族や友人と過ごすリビングを、心地よく整えるアイテムを集めました。",
  },
  {
    slug: "dining",
    name: "ダイニング・キッチン",
    href: "/scene/dining",
    image: "/images/common/scene_dining.jpg",
    description: "食卓を囲む心地よい空間",
    detail:
      "ダイニングテーブルやチェア、ペンダントライトなど。毎日の食事が少し特別になるセレクトです。",
  },
  {
    slug: "bedroom",
    name: "寝室",
    href: "/scene/bedroom",
    image: "/images/common/scene_bedroom.jpg",
    description: "やすらぎに満ちた休息の場",
    detail:
      "ベッド、ミラー、サイドテーブルなど。休み終わりの朝まで、やさしく寄り添う寝室づくりを。",
  },
  {
    slug: "study",
    name: "書斎・オフィス",
    href: "/scene/study",
    image: "/images/common/scene_study.jpg",
    description: "集中できるワークスペース",
    detail:
      "デスクまわりのチェアや収納を中心に、在宅ワークや読書の時間を整えるアイテムを選びました。",
  },
];

export function getSceneBySlug(slug: string): Scene | undefined {
  return scenes.find((scene) => scene.slug === slug);
}
