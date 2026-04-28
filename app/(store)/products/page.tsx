import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-gray-200 ">
        <Link
          href="/"
          className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
        >
          <ArrowLeft size={17} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
