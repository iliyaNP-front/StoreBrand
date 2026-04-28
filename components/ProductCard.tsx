import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ProductCard({
  product,
  categoryColor,
}: {
  product: Product;
  categoryColor: string | null;
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col">
      <div className="h-64 relative bg-gray-50 p-6 flex justify-center items-center"></div>

      <div className="p-6 border-t border-gray-100 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-[#003d5b] mb-2 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-sm text-[#30638e]/80 mb-4 line-clamp-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span
            className="text-xl font-bold"
            style={{ color: categoryColor || "#003d5b" }}
          >
            ${product.price}
          </span>

          <div className="flex gap-2">
            <Link
              href={`/products/${product.category}/${product.id}`}
              className="px-4 py-2 flex justify-center items-center rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: categoryColor || "#003d5b" }}
            >
              View Details
            </Link>

            <button
              className="w-10 h-10 rounded-full text-white flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: categoryColor || "#003d5b" }}
            >
              <ShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
