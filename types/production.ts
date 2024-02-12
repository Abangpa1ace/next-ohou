export type ProductItemTagCategory = "freeDelivery" | "specialPrice";

export type ProductItemTag = {
  category: ProductItemTagCategory;
  label: string;
};

export type ProductItem = {
  id: number;
  image: string;
  brand: string;
  title: string;
  price: number;
  discountRate?: number;
  review: {
    point: number;
    count: number;
  };
  tags?: ProductItemTag[];
  additional?: {
    isDepartureToday?: boolean;
  };
};

export interface RequestGetProducts {
  query?: string;
}
