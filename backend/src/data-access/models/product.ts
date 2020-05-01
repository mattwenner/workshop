// https://google.github.io/intermock/

import { Category } from "../../generated/types";
import { Review } from "./review";

export interface Product {
  id: string;
  name: string;
  description: string;
  categories: Category[];
  reviews: Review[];
}
