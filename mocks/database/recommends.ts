import { ProductItem } from "@/types/production";

export const recommends: ProductItem[] = [
  {
    id: 1,
    image:
      "https://image.xportsnews.com/contents/images/upload/article/2022/1013/mb_1665618915124373.jpg",
    brand: "엔믹스",
    title: "엔믹스 해원 '여긴 어디? 나는 누구?'[엑's HD포토]",
    price: 35000,
    discountRate: 15,
    review: {
      point: 4.5,
      count: 1100,
    },
    tags: [
      { category: "freeDelivery", label: "무료배송" },
      { category: "specialPrice", label: "특가" },
    ],
  },
  {
    id: 2,
    image:
      "https://res.heraldm.com/content/image/2023/01/21/20230121000124_0.jpg",
    brand: "뉴진스",
    title:
      "뉴진스 다니엘 '차이니즈 뉴 이어' 논란에…“부적절, 깊이 반성” - 헤럴드경제",
    price: 125800,
    discountRate: 37,
    review: {
      point: 4.7,
      count: 490,
    },
    additional: {
      isDepartureToday: true,
    },
    tags: [{ category: "specialPrice", label: "특가" }],
  },
  {
    id: 3,
    image: "https://newsimg.sedaily.com/2022/11/18/26DOA02M07_1.jpg",
    brand: "에스파",
    title: "*스마트전구증정* 머쉬룸 장스탠드 순수 국내자체제작 조명 _7colors",
    price: 15000,
    review: {
      point: 4.6,
      count: 1603,
    },
    tags: [
      { category: "freeDelivery", label: "무료배송" },
      { category: "specialPrice", label: "특가" },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn.topstarnews.net/news/photo/202212/14855398_1050900_5729.jpg",
    brand: "여자아이들",
    title: "북유럽 플로어 스탠드 조 장스탠드 LED 거실등 인테리어 무드등 2color",
    price: 29500,
    discountRate: 51,
    review: {
      point: 4.5,
      count: 2629,
    },
    tags: [{ category: "freeDelivery", label: "무료배송" }],
  },
  {
    id: 5,
    image:
      "https://image.news1.kr/system/photos/2020/1/4/3994216/article.jpg/dims/optimize",
    brand: "트와이스",
    title: "LERSTA 플로어 장스탠드 조명(안전포장)",
    price: 32900,
    discountRate: 16,
    review: {
      point: 4.3,
      count: 240,
    },
    tags: [{ category: "freeDelivery", label: "무료배송" }],
  },
  {
    id: 6,
    image:
      "https://thumbnews.nateimg.co.kr/view610///news.nateimg.co.kr/orgImg/jn/2022/03/14/2e19e7b792e3f0.jpg",
    brand: "엔믹스",
    title: "엔믹스 설윤, 코로나19 확진 판정 '미열·인후통 증상' : 네이트 연예",
    price: 39800,
    discountRate: 17,
    review: {
      point: 4.8,
      count: 1310,
    },
    tags: [
      { category: "freeDelivery", label: "무료배송" },
      { category: "specialPrice", label: "특가" },
    ],
  },
  {
    id: 7,
    image:
      "https://isplus.com/data/isp/image/2023/02/16/isp20230216000135.600x.8.jpg",
    brand: "뉴진스",
    title: "셀프 LED 간접 조명 커튼 침대 붙이는 줄조 무드등 LZ-1m",
    price: 160000,
    discountRate: 45,
    review: {
      point: 4.7,
      count: 488,
    },
    additional: {
      isDepartureToday: true,
    },
    tags: [{ category: "specialPrice", label: "특가" }],
  },
];
