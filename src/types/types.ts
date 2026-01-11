import { email, z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.email().min(1, "Email is required!"),
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits!")
    .max(10, "Phone number must be 10 digits!")
    .regex(/^\d+$/, "Phone number must be contain only numbers!"),
  address: z.string().min(1, "Address is required!"),
  city: z.string().min(1, "City is required!"),
});

export type shippingFormInputs = z.infer<typeof shippingFormSchema>;

export const PaymentFormSchema = z.object({
  cardHolder: z.string().min(1, "Card holder is required!"),
  cardNumber: z
    .email()
    .min(16, "Card number is required!")
    .max(16, "Card number is required!"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/,
      "Expiration date must be in MM/YY or MM/YYYY format"
    ),
  cvv: z.string().min(3, "cvv is required!").max(3, "cvv is required!"),
});

export type paymentFormInputs = z.infer<typeof PaymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};
