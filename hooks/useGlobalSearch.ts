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
    setCookie(CookieKey.SEARCH_HISTORIES, histories);
    setSearchHistories(histories);
  };

  const goToSearchResult = () => {
    if (inputQuery === currentQuery) return;

    updateSearchHistories([
      {
        category: "input",
        value: inputQuery,
      },
      ...searchHistories,
    ]);
    router.push(`/productions?${SEARCH_QUERY_KEY}=${inputQuery}`);
  };

  return {
    currentQuery,
    inputQuery,
    searchHistories,
    updateSearchHistories,
    handleChangeSearchInput,
    goToSearchResult,
  };
};

export default useGlobalSearch;
