"use client";

import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import { paymentMethod } from "@/data/products";
import PaymentDetails from "./PaymentDetails";

export default function PaymentMethodsList() {
  const [selectedId, setSelectedId] = useState<string>(paymentMethod[0].id);

  return (
    <>
      <div className="flex flex-col gap-4">
        {paymentMethod.map((method) => (
          <PaymentMethod
            key={method.id}
            method={method}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>

      <PaymentDetails selectedId={selectedId} />
    </>
  );
}
