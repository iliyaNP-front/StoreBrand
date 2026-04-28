import { categories } from "@/data/products";
import { ChevronDown, ChevronRight, Store } from "lucide-react";
import Link from "next/link";

export default function NavProductsList() {
  return (
    <div className="relative group">
      <button className="text-white/90 hover:text-[#edae49] transition-colors p-2 rounded-full hover:bg-white/10 flex items-center">
        <Store className="text-2xl mr-1" />
        <span className="hidden md:inline text-base font-medium">Products</span>
        <ChevronDown className="ml-1" size={18} />
      </button>

      <div
        className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg 
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 flex flex-col"
      >
        {categories.map((category) => (
          <Link
            href={`/products/${category.slug}`}
            key={category.slug}
            className="py-3 px-2 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <category.icon
                className="p-2 rounded-full text-white/80"
                style={{
                  backgroundColor: category.color,
                }}
                size={35}
              />
              <h4 className="font-medium text-[#003d5d] hover:text-[#00798c]">
                {category.name}
              </h4>
            </div>

            <ChevronRight
              size={16}
              className="text-gray-500 hover:text-[#00798c]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
