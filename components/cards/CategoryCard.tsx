import { Category } from "@/data/products";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:translate-y-[-5px] border-b-4 relative transition-all"
      style={{ borderColor: category.color }}
      key={category.slug}
    >
      <div className="h-48 relative flex justify-center items-center overflow-hidden bg-gray-100">
        <div
          className="h-20 w-20 rounded-full flex justify-center items-center font-bold text-2xl text-white"
          style={{ backgroundColor: category.color }}
        >
          SB
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-transparent"></div>
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2 text-[#003d5b] group-hover:text-[#00798c] transition-colors"
          style={{ color: category.color }}
        >
          {category.name}
        </h3>
        <p className="text-sm text-[#30638e] mb-4 ">{category.description}</p>
        <div
          className="flex justify-end items-center text-sm font-medium transition-colors"
          style={{ color: category.color }}
        >
          <span className="mr-1">View Products</span>{" "}
          <ChevronRight
            size={17}
            className="transform group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
