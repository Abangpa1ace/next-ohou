"use client";

import MainHeaderTop from "@/components/shared/layouts/main/MainHeader/Top/MainHeaderTop";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <Header>
      <MainHeaderTop />
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--white);
  z-index: var(--z-header);
`;
