import useGlobalSearch from "@/hooks/useGlobalSearch";
import { useSuspenseQuery } from "@tanstack/react-query";

const queryKey = ["useGetProducts"];

const queryFn = async (query) => {
  return fetch(`/products?query=${query}`).then((res) => res.json());
};

const useGetProducts = () => {
  const { currentQuery } = useGlobalSearch();
  const query = useSuspenseQuery({
    queryKey: [...queryKey, currentQuery],
    queryFn: () => queryFn(currentQuery),
  });

  return { ...query };
};

export default useGetProducts;
