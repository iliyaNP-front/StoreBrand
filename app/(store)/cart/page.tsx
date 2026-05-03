import DisplayProducts from "./DisplayProducts";
import OrderSummary from "./OrderSummary";

export default function cart() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 mt-5 mb-16">
      <div className="flex flex-col gap-5">
        <h3 className="text-4xl font-bold text-[#003d5b]">Shopping Cart</h3>
        <div className="w-full flex gap-5">
          <div className="w-4/6 h-[70vh] shadow-xl rounded-lg p-4">
            <div className="pb-2 border-b border-[#003d5b] font-medium text-[#003d5b] flex items-center justify-between">
              <p>Product</p>
              <div className="flex gap-30">
                <p>Price</p>
                <p>Quantity</p>
                <p>SubTotal</p>
              </div>
            </div>
            <DisplayProducts />
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
