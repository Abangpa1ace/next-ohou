import { IcoCloseCircle } from "@/components/shared/icons";
import HeaderSearchHistory from "@/components/shared/layouts/main/MainHeader/Top/HeaderSearch/HeaderSearchHistory/HeaderSearchHistory";
import useClickOutside from "@/hooks/useClickOutside";
import useGlobalSearch from "@/hooks/useGlobalSearch";
import useInput from "@/hooks/useInput";

import { KeyboardEvent, useRef, useState } from "react";
import styled from "styled-components";

function HeaderSearch() {
  const { currentQuery, routeToResult } = useGlobalSearch();
  const { inputValue, handleChangeInput } = useInput({
    defaultValue: currentQuery,
  });
  const { ref } = useClickOutside(() => setIsShowHistory(false));
  const inputRef = useRef<HTMLInputElement>(null);
  const [isShowHistory, setIsShowHistory] = useState<boolean>(false);

  const goToSearchResult = () => {
    setIsShowHistory(false);
    inputRef.current?.blur();
    routeToResult(inputValue);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goToSearchResult();
    }
  };

  const handleClickEraseInput = () => {
    handleChangeInput("");
    setIsShowHistory(false);
  };

  return (
    <Container ref={ref}>
      <InputArea>
        <SearchIcon className="fa fa-search" onClick={goToSearchResult} />
        <Input
          ref={inputRef}
          placeholder="통합검색"
          autoComplete="off"
          aria-autocomplete="list"
          value={inputValue}
          onFocus={() => {
            console.log("onFocuse");
            setIsShowHistory(true);
          }}
          onChange={(e) => handleChangeInput(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <EraseButton onClick={handleClickEraseInput}>
          <IcoCloseCircle />
        </EraseButton>
      </InputArea>
      {isShowHistory && (
        <HeaderSearchHistory setIsShowHistory={setIsShowHistory} />
      )}
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

const EraseButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  path {
    fill: var(--gray-90);
  }
  cursor: pointer;
`;
