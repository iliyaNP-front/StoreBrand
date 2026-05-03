import { categories } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SelectByCategory() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 my-16">
      <div className="bg-gray-100 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#003d5b]">
              Shop By Category
            </h2>

            <p className="text-[#003d5b]/80 text-sm sm:text-base max-w-md">
              Discover our curated collection of premium tech products across
              multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                style={{ backgroundColor: category.color }}
                className="p-4 sm:p-5 rounded-xl flex flex-col items-center text-center gap-1 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all group"
              >
                <category.icon
                  className="p-4 bg-white/10 rounded-full text-white"
                  size={55}
                />
                <h3 className="text-lg sm:text-xl font-bold text-white/80 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>

          <div>
            <Link
              href="/products"
              className="text-[#00798c] hover:text-[#003d5b] font-medium inline-flex items-center gap-2 transition-all group"
            >
              View All Categories
              <ArrowRight
                size={18}
                className="opacity-70 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        <div className="relative hidden sm:flex w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-auto rounded-xl overflow-hidden"></div>
      </div>
    </section>
  );
}
