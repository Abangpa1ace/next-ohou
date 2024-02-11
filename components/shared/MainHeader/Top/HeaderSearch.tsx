import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";
import styled from "styled-components";

function HeaderSearch() {
  const router = useRouter();

  const goToSearchResult = () => {
    router.push("/productions");
  };

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") goToSearchResult();
  };

  return (
    <Container>
      <InputArea>
        <SearchIcon className="fa fa-search" />
        <Input
          placeholder="통합검색"
          autoComplete="off"
          aria-autocomplete="list"
          onKeyPress={handlePressEnter}
        />
      </InputArea>
    </Container>
  );
}

export default HeaderSearch;

const Container = styled.div`
  width: calc(100% - 196px);
`;

const InputArea = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-right: 14px;
`;

const Input = styled.input`
  height: 100%;
  padding: 0 14px 0 40px;
  border: 1px solid var(--gray-80);
  color: var(--gray-300);
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;

  :focus,
  :active {
    border: 1px solid var(--blue-400) !important;
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;

  &::before {
    width: 100%;
    height: 100%;
  }
`;
