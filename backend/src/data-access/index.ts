import { Product } from "./models/product";
import mockProducts from "./mocks/products.json";
import { Review } from "./models/review";
import mockReviews from "./mocks/reviews.json";

export async function getProducts(): Promise<Product[]> {
  return mockProducts as Product[];
}

export async function getProductById(id: string): Promise<Product | null> {
  return (mockProducts as Product[]).find((p: Product) => p.id === id) ?? null;
}

export async function getReviewsForProduct(
  productId: string
): Promise<Review[]> {
  return mockReviews.filter((r) => r.productId === productId);
}
