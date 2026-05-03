"use client";
import { useMyContext } from "@/context";
import { Check, ShoppingCart } from "lucide-react";

export default function ProductShopCard({
  id,
  color,
}: {
  id: string;
  color: string | undefined;
}) {
  const context = useMyContext();

  const isAdded = context.shopCart.some((product) => product.id === id);
  const bgColor = isAdded ? "#22C55E" : color;
  return (
    <button
      onClick={() => {
        if (isAdded) return;
        context.AddToShopCart(id, 1);
      }}
      className={`w-10 h-10 rounded-full text-white flex items-center justify-center cursor-pointer`}
      style={{ backgroundColor: bgColor || "#003d5b" }}
    >
      {isAdded ? <Check /> : <ShoppingCart />}
    </button>
  );
}
