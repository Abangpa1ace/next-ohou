import ProductCard from "@/components/productions/ProductCard/ProductCard";
import { Text } from "@/components/shared/designs/Text";
import useGlobalSearch from "@/hooks/useGlobalSearch";
import { ProductItem } from "@/types/production";
import { Children, useEffect, useState } from "react";
import styled from "styled-components";

const MOCK_DATA: ProductItem[] = [
  {
    id: 1,
    image: "https://i.ytimg.com/vi/ym4ZdDuQt74/maxresdefault.jpg",
    brand: "엔믹스",
    title: "LED달 오로라 바다 무드등 블루투스 스피커 59가지컬러/밝기조절",
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
    id: 2,
    image: "https://image.blip.kr/v1/file/aee55ad8491771f272c6c0bc9312560a",
    brand: "뉴진스",
    title: "셀프 LED 간접 조명 커튼 침대 붙이는 줄조명 무드등 LZ-1m",
    price: 125800,
    discountRate: 37,
    review: {
      point: 4.7,
      count: 488,
    },
    additional: {
      isDepartureToday: true,
    },
    tags: [{ category: "specialPrice", label: "특가" }],
  },
  {
    id: 3,
    image: "https://thumb.mtstarnews.com/06/2023/06/2023060710543138356_1.jpg",
    brand: "에스파",
    title: "*스마트전구증정* 머쉬룸 장스탠드 순수 국내자체제작 조명 _7colors",
    price: 7800,
    review: {
      point: 4.6,
      count: 1593,
    },
    tags: [
      { category: "freeDelivery", label: "무료배송" },
      { category: "specialPrice", label: "특가" },
    ],
  },
];

export default function ResultProductList() {
  const { currentQuery } = useGlobalSearch();
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/products?query=${currentQuery}`).then((res) =>
        res.json()
      );
      setProducts(res);
    })();
  }, [currentQuery]);

  return (
    <div>
      <TitleSection>
        <Title>전체 {products.length}개</Title>
      </TitleSection>
      <ProductCardList>
        {Children.toArray(
          products.map((product) => <ProductCard product={product} />)
        )}
      </ProductCardList>
    </div>
  );
}

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin: 20px 0 4px;
`;

const Title = styled(Text)`
  color: var(--gray-300);
  font-size: 14px;
`;

const ProductCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;

  > * {
    width: calc((100% - 60px) / 4);
  }
`;
