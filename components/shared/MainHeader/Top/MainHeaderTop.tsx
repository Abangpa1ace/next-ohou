import MainLogo from "@/components/shared/icons/MainLogo";
import HeaderNav from "@/components/shared/MainHeader/Top/HeaderNav";
import HeaderSearch from "@/components/shared/MainHeader/Top/HeaderSearch";
import Link from "next/link";
import styled from "styled-components";

export default function MainHeaderTop() {
  return (
    <Container>
      <Wrapper>
        <Side id="left">
          <Link href="/">
            <MainLogo />
          </Link>
          <HeaderNav />
        </Side>
        <Side id="right">
          <HeaderSearch />
        </Side>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #eaedef;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--w);
  height: 80px;
  margin: 0 auto;
  padding: 10px 60px;
`;

const Side = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
