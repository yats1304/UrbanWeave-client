import ProductInteraction from "@/components/common/ProductInteraction";
import { ProductType } from "@/types/types";
import Image from "next/image";

//TEMP DATA
const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription: "Comfortable everyday t-shirt with a modern athletic fit.",
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
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  // TODO: Get product from DB

  // Temp data

  return {
    title: product.name,
    description: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;

  const selectedSize = size || product.sizes[0];
  const selectedColor = color || product.colors[0];

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* Image */}
      <div className="w-full lg:w-5/12 relative aspect-2/3">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* Details */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">₹ {product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* card info */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
