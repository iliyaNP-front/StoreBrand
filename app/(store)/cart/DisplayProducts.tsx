"use client";

import { useMyContext } from "@/context";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Trash } from "lucide-react";

export default function DisplayProducts() {
  const context = useMyContext();

  return (
    <div className="w-full h-full flex flex-col gap-2 mt-4">
      <div className="h-5/6">
        {context.shopCart.map((product) => (
          <div
            key={product.id}
            className="w-full py-3 flex sm:flex-row flex-col sm:items-center justify-between border-b border-gray-100 gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-15 h-15 bg-gray-100 rounded-sm lg:flex hidden"></div>
              <h4 className="text-[#003d5b] font-bold text-left line-clamp-1">
                {product.name}
              </h4>
            </div>
            <div className="flex items-center justify-end sm:gap-20">
              <p className="text-[#00798c] font-medium hidden md:flex">
                ${product.price}
              </p>
              <div className="flex">
                <button
                  onClick={() =>
                    context.updateQuantity(
                      product.id,
                      Math.max(1, product.quantity - 1),
                    )
                  }
                  className="w-10 h-8 border border-gray-400 flex justify-center items-center rounded-l-sm"
                >
                  <Minus size={15} />
                </button>

                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    context.updateQuantity(product.id, Number(e.target.value))
                  }
                  className="w-12 h-8 border border-gray-400 border-x-0 text-center outline-none"
                />

                <button
                  onClick={() =>
                    context.updateQuantity(
                      product.id,
                      Math.max(1, product.quantity + 1),
                    )
                  }
                  className="w-10 h-8 border border-gray-400 flex justify-center items-center rounded-r-sm"
                >
                  <Plus size={15} />
                </button>
              </div>
              <div className="flex gap-5 w-22 justify-end">
                <p className="text-[#D1495B] font-medium">
                  ${product.price * product.quantity}
                </p>
                <Trash
                  onClick={() => context.DeleteProduct(product.id)}
                  className="text-[#003d5b] cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 w-full pt-3 flex justify-between">
        <button
          onClick={() => context.DeleteAllProduct()}
          className="text-[#ee3352] text-md font-medium cursor-pointer"
        >
          Clear Cart
        </button>
        <Link
          href="/products"
          className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" /> Continue Shopping
        </Link>
      </div>
    </div>
  );
}
