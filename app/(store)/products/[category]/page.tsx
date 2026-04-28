import ProductCard from "@/components/ProductCard";
import { Product, products, categories } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = (await params).category;

  const selectedCategory = categories.find((cat) => cat.slug === category);

  const productCategory = products.filter(
    (product) => product.category === category,
  );

  console.log(productCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 ">
      <div className="bg-linear-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden ">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-3 ">{selectedCategory?.name}</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Explore our selection of premium {selectedCategory?.name} designed
            for exceptional performance
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {productCategory.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryColor={selectedCategory?.color}
          />
        ))}
      </div>
      <div className="mt-12 pt-6 border-t border-gray-200">
        <Link
          href="/products"
          className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" /> Back to Category
        </Link>
      </div>
    </div>
  );
}
