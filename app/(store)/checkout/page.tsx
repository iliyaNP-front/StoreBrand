import { Lock } from "lucide-react";
import Header from "./CheckOutHeader";
import DisplayMethods from "./DisplayMethods";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl w-full min-h-screen mx-auto px-4 mt-5 mb-16">
      <div className="flex flex-col gap-5">
        <Header />
        <div className="flex lg:flex-row flex-col w-full gap-5">
          <div className="lg:w-4/6 min-h-[70vh] shadow-xl rounded-lg p-6 flex flex-col bg-white">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div className="text-[#003d5b] inline font-medium px-3 py-1 rounded-full bg-blue-100">
                  1
                </div>
                <p className="text-[#003d5b] font-bold text-xl">
                  Payment Method
                </p>
              </div>
              <DisplayMethods />
            </div>
            <div className="mt-auto flex items-center gap-1 text-gray-400 text-sm">
              <Lock size={18} />
              <span>Your payment information is encrypted and secure.</span>
            </div>
          </div>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
