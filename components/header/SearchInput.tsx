"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const searchedProducts =
    query === ""
      ? []
      : products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <div className="hidden relative md:block flex grow max-w-lg mx-8">
      <form className="group relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full bg-white/10 border border-white/20 rounded-full py-2 pl-4 pr-10 text-white placeholder:text-white/60 focus:outline-none
                focus:ring-2 focus:ring-[#edae49] focus:border-transparent transition-all"
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 text-white/70 p-1.5 hover:text-white rounded-full transition-colors"
        >
          <Search className="text-xl" />
        </button>
      </form>
      {query !== "" && (
        <div className="w-full px-2 bg-white top-13 absolute rounded-lg shadow-lg">
          {searchedProducts.slice(0, 5).map((product) => (
            <Link
              href={`/products/${product.category}/${product.id}`}
              key={product.id}
              className="py-4 border-b border-gray-100 flex justify-between group items-center cursor-pointer hover:bg-gray-50 transition-colors "
            >
              <div>
                <h4 className="font-medium text-[#003d5d] group-hover:text-[#00798c] cursor-pointer">
                  {product.name}
                </h4>
                <p className="text-sm text-[#30638e]/70">{product.category}</p>
              </div>
              <p className="text-[#ee3352] font-medium">${product.price}</p>
            </Link>
          ))}
          <div className="border-t border-gray-100 w-full py-2">
            <Link
              href="/products"
              className="text-[#00798c] hover:text-[#003d5b] text-sm font-medium hover:translate-x-1 inline-flex transition-all items-center group"
            >
              View All Products{" "}
              <ArrowRight
                size={18}
                className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
