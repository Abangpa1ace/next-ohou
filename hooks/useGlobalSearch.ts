import useCookies from "@/hooks/useCookies";
import useInput from "@/hooks/useInput";
import { SearchHistoryItem } from "@/types/layouts/header";
import { CookieKey } from "@/types/shared/cookie";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SEARCH_QUERY_KEY = "query";

const useGlobalSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get(SEARCH_QUERY_KEY);
  const { inputValue: inputQuery, handleChangeInput: handleChangeSearchInput } =
    useInput({ defaultValue: currentQuery });
  const { getCookie, setCookie } = useCookies();

  const [searchHistories, setSearchHistories] = useState<SearchHistoryItem[]>(
    getCookie<SearchHistoryItem[]>(CookieKey.SEARCH_HISTORIES) ?? []
  );

  const updateSearchHistories = (histories: SearchHistoryItem[]) => {
    setSearchHistories(histories);
    setCookie(CookieKey.SEARCH_HISTORIES, histories);
  };

  const addSearchHistory = (history: SearchHistoryItem) => {
    const i = searchHistories.findIndex((h) => h.value === history.value);
    const addedHistories = [
      history,
      ...(i === -1
        ? searchHistories
        : searchHistories.filter((h) => h.value !== history.value)),
    ];

    updateSearchHistories(addedHistories);
  };

  const removeSearchHistory = (history: SearchHistoryItem) => {
    const removedHistories = searchHistories.filter(
      (h) => h.value !== history.value
    );
    updateSearchHistories(removedHistories);
  };

  const removeAllSearchHistories = () => updateSearchHistories([]);

  const routeToResult = (query: string) => {
    if (!query || query === currentQuery) return;

    addSearchHistory({
      category: "input",
      value: query,
    });
    router.push(`/productions?${SEARCH_QUERY_KEY}=${query}`);
  };

  return {
    currentQuery,
    inputQuery,
    searchHistories,
    handleChangeSearchInput,
    addSearchHistory,
    removeSearchHistory,
    removeAllSearchHistories,
    routeToResult,
  };
};

export default useGlobalSearch;
