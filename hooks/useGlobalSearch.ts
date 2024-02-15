import useInput from "@/hooks/useInput";
import { useRouter, useSearchParams } from "next/navigation";

const SEARCH_QUERY_KEY = "query";

const useGlobalSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get(SEARCH_QUERY_KEY);
  const { inputValue: inputQuery, handleChangeInput: handleChangeSearchInput } =
    useInput({ defaultValue: currentQuery || "" });

  const goToSearchResult = () => {
    if (inputQuery === currentQuery) return;
    router.push(`/productions?${SEARCH_QUERY_KEY}=${inputQuery}`);
  };

  return {
    currentQuery,
    inputQuery,
    handleChangeSearchInput,
    goToSearchResult,
  };
};

export default useGlobalSearch;
