import { Product } from "./models/product";
import mockProducts from "./mocks/products.json";
import { Review } from "./models/review";
import mockReviews from "./mocks/reviews.json";
import { Category } from "../generated/types";

function mapProduct(product: any): Product {
  const categories = product.categories.map(
    (category: string) => Category[category as keyof typeof Category]
  );
  return { categories, ...product };
}

export async function getProducts(): Promise<Product[]> {
  return mockProducts.map(mapProduct);
}

export async function getProductById(id: string): Promise<Product | null> {
  return mockProducts.map(mapProduct).find((p: Product) => p.id === id) ?? null;
}

export async function getReviewsForProduct(
  productId: string
): Promise<Review[]> {
  return mockReviews.filter((r) => r.productId === productId);
}
