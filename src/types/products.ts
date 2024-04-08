import { ProductType } from "../const";

export type TProduct = {
  id: number;
  name: string;
  type: ProductType;
  previewImg: string;
}

export type TProducts = TProduct[];