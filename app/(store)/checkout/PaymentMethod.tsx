import Image from "next/image";
import { PaymentMethod as PaymentMethodType } from "@/data/products";

type Props = {
  method: PaymentMethodType;
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function PaymentMethod({ method, selectedId, onSelect }: Props) {
  const isSelected = selectedId === method.id;

  return (
    <label
      htmlFor={method.id}
      onClick={() => onSelect(method.id)}
      className={`w-full px-4 py-4 rounded-lg border flex justify-between items-center cursor-pointer transition-all
      ${
        isSelected
          ? "bg-blue-100 border-blue-500"
          : "bg-gray-100 border-gray-300 hover:border-gray-400"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ backgroundColor: method.color }}
        >
          <Image src={method.image} width={24} height={24} alt={method.name} />
        </div>

        <div>
          <h3 className="text-[#003d5b] font-medium">{method.name}</h3>
          <p className="text-sm text-[#003d5b]/70">{method.description}</p>
        </div>
      </div>

      <input
        id={method.id}
        type="radio"
        name="payment"
        checked={isSelected}
        onChange={() => onSelect(method.id)}
        className="w-5 h-5 accent-blue-600 cursor-pointer"
      />
    </label>
  );
}
