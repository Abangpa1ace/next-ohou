import { CookieKey } from "@/types/shared/cookie";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const useCookies = () => {
  const cookieStore = cookies();

  const getCookie = (key: CookieKey) => cookieStore.get(key);

  const setCookie = (
    key: CookieKey,
    value,
    options: Partial<ResponseCookies> = {}
  ) => cookieStore.set(key, value, options);

  return {
    getCookie,
    getAllCookie: cookieStore.getAll,
  };
};

export default useCookies;
