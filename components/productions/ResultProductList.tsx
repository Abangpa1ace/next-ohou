import { Text } from "@/components/shared/designs/Text";
import ProductCard from "@/components/shared/units/ProductCard/ProductCard";
import useGetProducts from "@/hooks/apis/useGetProducts";
import { Children } from "react";
import styled from "styled-components";

export default function ResultProductList() {
  const { data } = useGetProducts();

  return (
    <div>
      <TitleSection>
        <Title>전체 {data.length}개</Title>
      </TitleSection>
      <ProductCardList>
        {Children.toArray(
          data.map((product) => <ProductCard product={product} />)
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
