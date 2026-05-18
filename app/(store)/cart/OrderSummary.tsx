"use client";

import { useMyContext } from "@/context";
import CheckOutButton from "./CheckOutButton";

export default function OrderSummary() {
  const context = useMyContext();

  const isEmpty = context.shopCart.length === 0;

  return (
    <div className="lg:w-2/6 h-[70vh] shadow-xl rounded-lg p-6 flex flex-col justify-between">
      <div>
        <p className="text-[#003d5b] font-bold text-2xl mb-6">Order Summary</p>

        <div className="flex flex-col gap-3 border-b pb-3 border-[#003d5b]">
          <div className="flex items-center justify-between text-[#003d5b]">
            <p>SubTotal</p>
            <p>${context.subTotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-[#003d5b]">
            <p>Shipping</p>
            <p>${context.shipping.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-[#003d5b]">
            <p>Tax</p>
            <p>${context.tax.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 mb-5 text-[#003d5b]">
          <p className="text-xl font-medium">Total</p>
          <p className="font-medium">${context.total.toFixed(2)}</p>
        </div>
      </div>

      <div>
        <CheckOutButton isEmpty={isEmpty} />

        <p className="text-sm mt-5 text-gray-400 text-center">
          We accept credit card, PayPal, and Apple Pay
        </p>
      </div>
    </div>
  );
}
