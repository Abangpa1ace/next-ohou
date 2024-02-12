"use client";

import MainHeader from "@/components/shared/layouts/main/MainHeader/MainHeader";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <MainHeader />
      <Main>{children}</Main>
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  padding-top: 81px;
`;

const Main = styled.div`
  max-width: var(--w);
  margin: 20px auto;
  padding: 0 var(--p-side);
`;
