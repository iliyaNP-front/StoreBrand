import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function LatestProducts() {
  return (
    <section className="max-w-7xl w-full px-4 mx-auto mt-12 mb-20">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h4 className="text-[#003d5b] text-2xl font-semibold">
            Latest Products
          </h4>
          <Link
            href="/products"
            className="text-[#00798c] hover:text-[#003d5b] font-medium inline-flex items-center gap-2 transition-all group"
          >
            View All Products
            <ArrowRight
              size={18}
              className="opacity-70 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-5 gap-5 lg:grid-cols-3 border-t border-gray-100">
          {products
            .reverse()
            .slice(0, 12)
            .map((products) => (
              <ProductCard
                key={products.id}
                product={products}
                categoryColor={null}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
