import ProductCard from "@/components/productions/ProductCard";
import styled from "styled-components";

export default function ResultProductList() {
  return (
    <Container>
      {Array.from({ length: 18 }, (_, i) => i).map((n) => (
        <ProductCard />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 20px;
`;
