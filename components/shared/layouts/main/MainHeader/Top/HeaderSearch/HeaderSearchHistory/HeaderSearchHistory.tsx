import { Text } from "@/components/shared/designs/Text";
import { IcoClose } from "@/components/shared/icons";
import useGlobalSearch from "@/hooks/useGlobalSearch";
import { SearchHistoryItem } from "@/types/layouts/header";
import { Children } from "react";
import styled from "styled-components";

interface Props {
  setIsShowHistory: (isShow: boolean) => void;
}

function HeaderSearchHistory({ setIsShowHistory }: Props) {
  const {
    searchHistories,
    removeSearchHistory,
    removeAllSearchHistories,
    routeToResult,
  } = useGlobalSearch();

  const handleClickRemoveAll = () => {
    removeAllSearchHistories();
    setIsShowHistory(false);
  };

  const handleClickHistory = (value: SearchHistoryItem["value"]) => {
    setIsShowHistory(false);
    routeToResult(value);
  };

  if (!searchHistories?.length) return null;

  return (
    <Container>
      <TitleWrapper>
        <Title color="gray90">최근 검색어</Title>
        <HistoryRemoveAllButton color="gray90" onClick={handleClickRemoveAll}>
          전체 삭제
        </HistoryRemoveAllButton>
      </TitleWrapper>
      <ul>
        {Children.toArray(
          searchHistories?.map((historyItem) => (
            <HistoryItem onClick={() => handleClickHistory(historyItem.value)}>
              <HistoryLabel color="gray400">{historyItem.value}</HistoryLabel>
              <HistoryRemoveButton
                onClick={(e) => {
                  e.stopPropagation();
                  removeSearchHistory(historyItem);
                }}
              >
                <IcoClose />
              </HistoryRemoveButton>
            </HistoryItem>
          ))
        )}
      </ul>
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

const HistoryRemoveAllButton = styled(Text)`
  font-size: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-60);
  }
`;

const HistoryLabel = styled(Text)`
  font-size: 14px;
`;

const HistoryRemoveButton = styled.button`
  width: 16px;
  height: 16px;
  cursor: pointer;
  z-index: 1;

  path {
    fill: var(--gray-90);
  }
`;
