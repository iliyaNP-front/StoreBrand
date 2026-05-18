"use client";

import { useMyContext } from "@/context";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Lock } from "lucide-react";

export default function CheckoutSummary() {
  const context = useMyContext();
  return (
    <div className="lg:w-2/6 min-h-[70vh] shadow-xl rounded-lg p-6 flex flex-col justify-between bg-white">
      <div>
        <p className="text-[#003d5b] font-bold text-2xl mb-6">Order Summary</p>
        <div className="flex flex-col gap-3 border-b pb-3 border-[#003d5b]">
          {context.shopCart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between text-[#003d5b]"
            >
              <p>
                {" "}
                {product.quantity} x {product.name}
              </p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-3 mb-5 text-[#003d5b]">
          <p className="text-xl font-medium">Total</p>
          <p className="font-medium">${context.total.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <Link
          href="/checkout"
          className={` flex items-center justify-center gap-1 w-full text-lg py-3 font-medium rounded-full bg-[#ee3352] text-white group hover:shadow-lg hover:scale-105 duration-500 transition-all`}
        >
          Complete Order
          <ArrowRight className="group-hover:translate-x-1 transform duration-500 transition-transform" />
        </Link>

        <p className="text-sm mt-5 text-gray-400 text-center">
          By placing your order, you agree to our terms and conditions
        </p>
      </div>
    </div>
  );
}
