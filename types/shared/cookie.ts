export enum CookieKey {
  SEARCH_HISTORIES = "SEARCH_HISTORIES",
}

export interface CookieValue<V = string> {
  type: string;
  value: V;
}
