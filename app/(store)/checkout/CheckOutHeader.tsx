import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  return (
    <div className="flex w-full justify-between">
      <h3 className="text-4xl font-bold text-[#003d5b]">Checkout</h3>
      <Link
        href="/cart"
        className="text-[#00798c] hover:text-[#003d5b] font-medium inline-flex items-center gap-1 transition-all group"
      >
        <ArrowLeft
          size={18}
          className="opacity-70 hidden sm:flex group-hover:-translate-x-1 transition-transform"
        />
        back to cart
      </Link>
    </div>
  );
}
