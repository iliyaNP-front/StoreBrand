"use client";
import { products } from "@/data/products";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, use } from "react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [quantity, setQuantity] = useState(1);
  const { id } = use(params);
  const selectedProduct = products.find((product) => product.id == id);

  if (!selectedProduct) {
    return <div className="p-10">Product not found</div>;
  }
  return (
    <div className="max-w-7xl w-full mx-auto px-4 my-12">
      <div className="mb-2 ml-2 flex gap-2 text-gray-600">
        <Link className="text-[#003d5b]" href="/products">
          Products
        </Link>
        /
        <Link
          className="text-[#003d5b]"
          href={`/products/${selectedProduct?.category}`}
        >
          {selectedProduct?.category}
        </Link>
        /
        <Link
          className="text-[#003d5b]"
          href={`/products/${selectedProduct?.category}/${selectedProduct?.id}`}
        >
          {selectedProduct?.name}
        </Link>
      </div>
      <div className="w-full h-[55vh] bg-gray-50 rounded-2xl shadow-2xl flex">
        <div className="w-1/2 h-full bg-gray-300 rounded-l-2xl"></div>
        <div className="w-1/2 h-full px-10 py-20 flex flex-col justify-between">
          <div className="">
            <h3 className="text-[#003d5b] font-bold text-4xl line-clamp-1 mb-3">
              {selectedProduct?.name}
            </h3>
            <p className="text-[#D1495B] font-semibold text-2xl">
              ${selectedProduct?.price}
            </p>
            <p className="mt-8 text-[#003d5b] font-medium">
              {selectedProduct?.description}
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-xl text-[#003d5b] mt-26">
                Quantity
              </h4>
              <div className="flex ">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="w-10 h-8 border border-gray-400 flex justify-center items-center cursor-pointer rounded-l-sm"
                >
                  <Minus size={15} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-10 h-8 border border-gray-400 border-x-0 flex justify-center items-center text-center outline-none"
                />

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-8 border border-gray-400 flex justify-center items-center cursor-pointer rounded-r-sm"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 gap-5">
              <button className="flex gap-2 w-1/2 bg-[#D1495B] justify-center py-2 rounded-full text-white font-medium cursor-pointer">
                <ShoppingCart />
                Add to Cart
              </button>
              <Link
                href="/cart"
                className="text-[#003d5b] w-1/2 flex justify-center py-2 rounded-full font-medium bg-gray-200 cursor-pointer"
              >
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
