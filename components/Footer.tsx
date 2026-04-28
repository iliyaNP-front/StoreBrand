import { categories } from "@/data/products";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="bg-[#003d5b] py-16">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-2">
                Join our Newsletter
              </h2>
              <p className="text-white/80">
                Get the latest products, promotion, and tech news delivered to
                your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#edae49] transition-all min-w-[240px]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#edae49] hover:bg-[#edae49]/90 text-white font-medium px-6 py-3 rounded-lg transform hover:scale-105 transition-all flex justify-center items-center"
                >
                  Subscribe <Mail className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-16  px-6 ">
        <div className="grid grid-cols md:grid-cols-12 gap-8">
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center mb-6">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-[#edae49] text-[#003d5b] rounded-full flex items-center justify-center font-bold text-xl mr-2">
                  SB
                </div>
                <span className="font-bold text-xl tracking-tight text-[#003d5b]">
                  Store<span className="text-[#edae49]">Brand</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-600 mb-6">
              Elevating your tech experiance with premium products and
              exceptional service.
            </p>
            <div className="flex space-x-4"></div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg ">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 5).map((categorie) => (
                <li key={categorie.slug}>
                  <Link
                    href={`/products/${categorie.slug}`}
                    className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex transition-all items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#edae49] opacity-70 mr-2 inline-block "></span>
                    {categorie.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#00798c] hover:text-[#003d5b] font-medium hover:translate-x-1 inline-flex transition-all items-center group"
                >
                  View All{" "}
                  <ArrowRight
                    size={18}
                    className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg ">Shop</h3>
            <ul className="space-y-2.5">
              {[
                "All Products",
                "New Arrivals",
                "Best Sellers",
                "Deals",
                "Gift Cards",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex transition-all items-center"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg ">Support</h3>
            <ul className="space-y-2.5">
              {["Contact Us", "FAQs", "Shipping", "Returns", "Track Order"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex transition-all items-center"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-[#003d5b] font-bold mb-4 text-lg ">Company</h3>
            <ul className="space-y-2.5">
              {["About us", "Blog", "Careers", "Press", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-[#00798c] hover:translate-x-1 inline-flex transition-all items-center"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} StoreBrand. All right reserved.
            </div>
            <div className="flex items-center">
              <div className="hidden sm:flex items-center mr-6 space-x-3">
                {["Viva", "MasterCard", "PayPal", "Apple"].map((method) => (
                  <div className="text-gray-500 text-sm" key={method}>
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
