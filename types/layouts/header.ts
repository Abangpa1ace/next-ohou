export type SearchHistoryCategory = "input";

export interface SearchHistoryItem {
  category: SearchHistoryCategory;
  value: string;
}
