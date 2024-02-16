import { CookieKey, CookieValue } from "@/types/shared/cookie";
import {
  deleteCookie as _deleteCookie,
  getCookie as _getCookie,
  getCookies as _getCookies,
  setCookie as _setCookie,
} from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";

const useCookies = () => {
  const getCookie = <V>(
    key: CookieKey,
    options: OptionsType = {}
  ): CookieValue<V>["value"] => {
    const cookieData = _getCookie(key, options);
    return cookieData ? JSON.parse(cookieData).value : undefined;
  };

  const setCookie = (key: CookieKey, value, options: OptionsType = {}) =>
    _setCookie(key, JSON.stringify({ type: typeof value, value }), options);

  const deleteCookie = (key: CookieKey, options: OptionsType = {}) =>
    _deleteCookie(key, options);

  return {
    getCookie,
    getCookies: _getCookies,
    setCookie,
    deleteCookie,
  };
};

export default useCookies;
