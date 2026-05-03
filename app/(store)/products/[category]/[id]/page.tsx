"use client";
import { products } from "@/data/products";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState, use } from "react";
import AddToCartButton from "./AddToCartButton";

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
    <div className="max-w-7xl w-full mx-auto px-4 my-8 lg:my-12">
      <div className="mb-4 flex flex-wrap gap-2 text-sm text-gray-600">
        <Link className="text-[#003d5b]" href="/products">
          Products
        </Link>
        /
        <Link
          className="text-[#003d5b]"
          href={`/products/${selectedProduct.category}`}
        >
          {selectedProduct.category}
        </Link>
        /
        <Link
          className="text-[#003d5b] font-semibold"
          href={`/products/${selectedProduct.category}/${selectedProduct.id}`}
        >
          {selectedProduct.name}
        </Link>
      </div>

      <div className="w-full bg-gray-50 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto bg-gray-300"></div>

        <div className="w-full lg:w-1/2 px-6 py-8 lg:px-10 lg:py-14 flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-[#003d5b] font-bold text-2xl sm:text-3xl lg:text-4xl mb-3">
              {selectedProduct.name}
            </h3>

            <p className="text-[#D1495B] font-semibold text-xl sm:text-2xl">
              ${selectedProduct.price}
            </p>

            <p className="mt-6 text-[#003d5b] text-sm sm:text-base font-medium">
              {selectedProduct.description}
            </p>
          </div>

          <div className="flex flex-col lg:gap-10">
            <div>
              <h4 className="font-medium text-lg text-[#003d5b] mb-2">
                Quantity
              </h4>

              <div className="flex mb-6">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                  }
                  className="w-10 h-8 border border-gray-400 flex justify-center items-center rounded-l-sm"
                >
                  <Minus size={15} />
                </button>

                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-12 h-8 border border-gray-400 border-x-0 text-center outline-none"
                />

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-8 border border-gray-400 flex justify-center items-center rounded-r-sm"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton id={selectedProduct.id} quantity={quantity} />

              <Link
                href="/cart"
                className="text-[#003d5b] w-full sm:w-1/2 flex justify-center py-2 rounded-full font-medium bg-gray-200"
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
