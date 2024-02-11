"use client";

import ResultProductList from "@/components/productions/ResultProductList";
import styled from "styled-components";

export default function ProductionsPage() {
  return (
    <Container>
      <ResultProductList />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
