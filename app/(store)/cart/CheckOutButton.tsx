import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CheckOutButton({ isEmpty }: { isEmpty: boolean }) {
  const baseStyles =
    "flex items-center justify-center gap-1 w-full text-lg py-3 font-medium rounded-full";
  if (isEmpty) {
    return (
      <div
        className={`${baseStyles} bg-gray-400 text-white cursor-not-allowed`}
      >
        Proceed to Checkout
        <ArrowRight className="opacity-50" />
      </div>
    );
  }

  return (
    <Link
      href="/checkout"
      className={`${baseStyles} bg-[#ee3352] text-white group hover:shadow-lg hover:scale-105 duration-500 transition-all`}
    >
      Proceed to Checkout
      <ArrowRight className="group-hover:translate-x-1 transform duration-500 transition-transform" />
    </Link>
  );
}
