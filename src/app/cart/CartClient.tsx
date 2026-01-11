"use client";

import PaymentForm from "@/components/common/PaymentForm";
import ShippingForm from "@/components/common/ShippingForm";
import useCartStore from "@/store/cardStore";
import { shippingFormInputs } from "@/types/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

//steps
const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

const CartClientPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<shippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1");

  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12 ">
      {/* Title */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      {/* Steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full p-4 text-white flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* Steps and Details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* Steps */}
        <div className="w-full lg:7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.map((item) => (
              // Single cart item
              <div
                key={item.id + item.selectedColor + item.selectedSize}
                className="flex items-center justify-between"
              >
                {/* Image and details */}
                <div className="flex gap-8">
                  {/* Image */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor]}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* Product details */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                      <p className="text-sm text-gray-500">
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">₹ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item)}
                  className="w-8 h-8 rounded-full bg-red-100  text-red-400 hover:bg-red-200 hover:text-red-600 transition-all duration-300 flex justify-center items-center cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please fill in the shipping form to continue
            </p>
          )}
        </div>
        {/* Details */}
        <div className="w-full h-max lg:5/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal</p>
              <p className=" font-medium">
                ₹
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal (10%)</p>
              <p className=" font-medium">₹ 200</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className=" font-medium">₹ 49</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className=" font-medium">
                ₹
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartClientPage;
