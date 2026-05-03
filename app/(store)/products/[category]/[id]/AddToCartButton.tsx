"use client";

import { useMyContext } from "@/context";
import { Check, ShoppingCart } from "lucide-react";

export default function AddToCartButton({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) {
  const context = useMyContext();
  const isAdded = context.shopCart.some((product) => product.id === id);
  return (
    <button
      onClick={() => {
        if (isAdded) return;
        context.AddToShopCart(id, quantity);
      }}
      className={`flex gap-2 w-full sm:w-1/2 ${isAdded ? "bg-green-500" : "bg-[#ee3352]"} justify-center items-center py-2 rounded-full text-white font-medium cursor-pointer`}
    >
      {isAdded ? <Check /> : <ShoppingCart className="text-sm" />}
      {isAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}
