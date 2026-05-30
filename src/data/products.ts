import { productImages } from "./product-images";

const categories = [
  "Toys",
  "Clothing",
  "Books",
  "Accessories",
  "Outdoor",
] as const;
type Category = (typeof categories)[number];

const brands = [
  "LEGO",
  "FunSkool",
  "FirstCry",
  "Hopscotch",
  "Puma",
  "Skillmatics",
  "Penguin",
  "Hero",
];

const badges = ["Best Seller", "Trending", "New Arrival", "Popular"];

export const products = Array.from({ length: 100 }, (_, index) => {
  const category = categories[index % categories.length];

  const imageMap: Record<Category, string[]> = {
    Toys: productImages.toys,
    Clothing: productImages.clothing,
    Books: productImages.books,
    Accessories: productImages.accessories,
    Outdoor: productImages.outdoor,
  };

  const images = imageMap[category];

  return {
    title: `Kids Product ${index + 1}`,

    slug: `kids-product-${index + 1}`,

    description: `Premium quality ${category.toLowerCase()} product for children.`,

    price: Math.floor(Math.random() * 4000) + 300,

    originalPrice: Math.floor(Math.random() * 5000) + 500,

    discountPercentage: Math.floor(Math.random() * 50) + 5,

    rating: Number((Math.random() * 2 + 3).toFixed(1)),

    reviewCount: Math.floor(Math.random() * 500),

    category,

    brand: brands[index % brands.length],

    stock: Math.floor(Math.random() * 50) + 1,

    badge: badges[index % badges.length],

    image: images[index % images.length],
  };
});
