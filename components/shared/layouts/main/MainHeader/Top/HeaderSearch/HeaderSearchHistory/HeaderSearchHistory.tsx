import { Text } from "@/components/shared/designs/Text";
import styled from "styled-components";

function HeaderSearchHistory() {
  return (
    <Container>
      <TitleWrapper>
        <Title color="gray90">최근 검색어</Title>
      </TitleWrapper>
    </Container>
  );
}

export default HeaderSearchHistory;

const Container = styled.div`
  position: absolute;
  bottom: -4px;
  width: 100%;
  min-height: 200px;
  max-height: 400px;
  padding: 10px 0;
  background-color: var(--white);
  border: 1px solid var(--gray-60);
  box-shadow: rgba(63, 71, 77, 0.15) 0px 4px 6px 0px;
  border-radius: 4px;
  overflow-y: auto;
  transform: translateY(100%);
`;

const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 8px 10px;
`;

const Title = styled(Text)`
  font-size: 13px;
`;
