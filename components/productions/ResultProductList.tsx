import { Text } from "@/components/shared/designs/Text";
import ProductCard from "@/components/shared/units/ProductCard/ProductCard";
import useGlobalSearch from "@/hooks/useGlobalSearch";
import { ProductItem } from "@/types/production";
import { Children, useEffect, useState } from "react";
import styled from "styled-components";

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
