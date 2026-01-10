import { ProductsType } from "@/types/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// TEMPORARY DUMMY PRODUCTS DATA
const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Comfortable everyday t-shirt with a modern athletic fit.",
    description:
      "Designed for everyday comfort, the Adidas CoreFit T-Shirt is made with soft, breathable fabric that keeps you fresh all day. Its regular fit and lightweight feel make it perfect for workouts, casual outings, or daily wear.",
    price: 1499,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Lightweight zip jacket designed for warmth and comfort.",
    description:
      "The Puma Ultra Warm Zip jacket offers excellent insulation while remaining lightweight. Featuring a smooth zipper closure and modern fit, it’s ideal for chilly mornings, outdoor activities, or travel.",
    price: 3999,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Soft fleece pullover for warmth and casual style.",
    description:
      "Stay warm and stylish with the Nike Air Essentials Pullover. Crafted from premium fleece material, it delivers superior comfort and a relaxed fit, making it perfect for both training and casual wear.",
    price: 4499,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "Nike Dri Flex T-Shirt",
    shortDescription: "Sweat-wicking t-shirt built for active performance.",
    description:
      "The Nike Dri Flex T-Shirt is engineered with sweat-wicking technology to keep you dry and comfortable. Its flexible fabric allows easy movement, making it ideal for intense workouts or active lifestyles.",
    price: 1299,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: {
      white: "/products/4w.png",
      pink: "/products/4p.png",
    },
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription: "Warm, fast-drying fleece for cold weather comfort.",
    description:
      "Under Armour StormFleece provides warmth without the bulk. Built with fast-drying fabric and a soft inner layer, this fleece is perfect for outdoor training, cold weather runs, or casual winter wear.",
    price: 4999,
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription: "Iconic sneakers with superior cushioning and comfort.",
    description:
      "The Nike Air Max 270 delivers unmatched cushioning and all-day comfort. Featuring a large Air unit and breathable upper, these shoes are perfect for long walks, daily use, and street-style fashion.",
    price: 9999,
    sizes: ["40", "42", "43", "44"],
    colors: ["gray", "white"],
    images: {
      gray: "/products/6g.png",
      white: "/products/6w.png",
    },
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription: "High-performance shoes with responsive cushioning.",
    description:
      "Experience responsive cushioning with the Nike Ultraboost Pulse. Designed for comfort and performance, these shoes offer excellent energy return, making them ideal for running, training, and everyday wear.",
    price: 10999,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: {
      gray: "/products/7g.png",
      pink: "/products/7p.png",
    },
  },
  {
    id: 8,
    name: "Levi's Classic Denim",
    shortDescription: "Timeless denim jeans with a comfortable fit.",
    description:
      "Levi's Classic Denim delivers timeless style and durable quality. Made from premium denim fabric, it offers a comfortable fit and long-lasting wear, suitable for casual outings and everyday fashion.",
    price: 7999,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: {
      blue: "/products/8b.png",
      green: "/products/8gr.png",
    },
  },
];

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
