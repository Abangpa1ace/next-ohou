import { ProductItemTag, ProductItemTagCategory } from "@/types/production";
import { Children } from "react";
import styled, { css } from "styled-components";

interface Props {
  tags?: ProductItemTag[];
}

export default function ProductCardTags({ tags }: Props) {
  if (!tags?.length) return null;

  return (
    <Container>
      {Children.toArray(
        tags.map(({ category, label }) => (
          <Tag category={category}>{label}</Tag>
        ))
      )}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
`;

const Tag = styled.li<Pick<ProductItemTag, "category">>`
  ${({ category }) => tagTheme(category)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 5px;
  font-size: 11px;
  border-radius: 4px;

  & + & {
    margin-left: 3px;
  }
`;

const tagTheme = (category: ProductItemTagCategory) => {
  switch (category) {
    case "specialPrice":
      return css`
        color: var(--white);
        background-color: var(--red-200);
      `;
    case "freeDelivery":
    default:
      return css`
        color: var(--gray-100);
        background-color: var(--gray-60);
      `;
  }
};
