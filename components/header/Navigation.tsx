import { User } from "lucide-react";
import Link from "next/link";
import NavProductsList from "./NavProductsList";
import ShopCartIcon from "./ShopCartIcon";
import SearchInput from "./SearchInput";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#003d5d] shadow-md py-4 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-[#edae49] text-[#003d5b] rounded-full flex items-center justify-center font-bold text-xl mr-2">
                SB
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Store<span className="text-[#edae49]">Brand</span>
              </span>
            </div>
          </Link>
          <SearchInput />
          <div className="hidden md:flex items-center space-x-4">
            <NavProductsList />
            <ShopCartIcon />
            <Link
              href="/login"
              className="text-white flex justify-center items-center hover:text-[#edae49] rounded-full p-2 hover:bg-white/10 transtion-colors"
            >
              <User className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
