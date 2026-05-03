"use client";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useMyContext } from "@/context";

export default function ShopCartIcon() {
  const context = useMyContext();
  const shopCartLength = context.shopCart.length;
  return (
    <Link
      href="/cart"
      className="text-white relative flex justify-center items-center hover:text-[#edae49] rounded-full group p-2 hover:bg-white/10 transtion-colors"
    >
      <ShoppingCart className="text-2xl" />
      <div className="absolute top-0 right-0 bg-[#b1495b] text-[12px] rounded-full w-5 flex justify-center items-center group-hover:text-white">
        {shopCartLength}
      </div>
    </Link>
  );
}
