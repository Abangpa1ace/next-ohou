import HeaderSearchHistory from "@/components/shared/layouts/main/MainHeader/Top/HeaderSearch/HeaderSearchHistory/HeaderSearchHistory";
import useGlobalSearch from "@/hooks/useGlobalSearch";
import { KeyboardEvent } from "react";
import styled from "styled-components";

function HeaderSearch() {
  const { inputQuery, handleChangeSearchInput, goToSearchResult } =
    useGlobalSearch();

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
          value={inputQuery}
          onChange={handleChangeSearchInput}
          onKeyPress={handlePressEnter}
        />
      </InputArea>
      <HeaderSearchHistory />
    </Container>
  );
}

export default HeaderSearch;

const Container = styled.div`
  position: relative;
  width: calc(100% - 196px);
`;

const InputArea = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-right: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 14px 0 40px;
  border: 1px solid var(--gray-70);
  color: var(--gray-400);
  font-size: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;

  &:focus,
  &:focus-visible,
  &:active {
    border: 1px solid var(--blue-400);
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
