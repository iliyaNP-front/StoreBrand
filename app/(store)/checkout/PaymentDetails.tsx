export default function PaymentDetails({ selectedId }: { selectedId: string }) {
  if (selectedId === "1")
    return (
      <div className="w-full grid grid-cols-2 gap-4">
        {/* Card Number */}
        <div className="flex flex-col col-span-2 gap-1">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="**** **** **** ****"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
          />
        </div>

        {/* Card Holder */}
        <div className="flex flex-col gap-1">
          <label>Card Holder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        {/* Expiry Date */}
        <div className="flex flex-col gap-1">
          <label>Expiry Date</label>
          <input
            type="text"
            placeholder="MM / YY"
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        {/* CVV */}
        <div className="flex flex-col gap-1">
          <label>CVV</label>
          <input
            type="password"
            placeholder="***"
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>

        {/* ZIP / Postal */}
        <div className="flex flex-col gap-1">
          <label>ZIP / Postal Code</label>
          <input
            type="text"
            placeholder="12345"
            className="border border-gray-300 px-3 py-2 rounded-md"
          />
        </div>
      </div>
    );

  if (selectedId === "2")
    return (
      <div className="w-full mt-4 p-4 border rounded-lg bg-gray-50 flex items-center gap-3">
        <img src="/icons/paypal-brands-solid-full.svg" className="w-6 h-6" />
        <p className="text-sm text-gray-700">
          You will be redirected to <strong>PayPal</strong> to securely complete
          your payment.
        </p>
      </div>
    );

  if (selectedId === "3")
    return (
      <div className="w-full mt-4 p-4 border rounded-lg bg-gray-50 flex items-center gap-3">
        <img src="/icons/apple-brands-solid-full.svg" className="w-6 h-6" />
        <p className="text-sm text-gray-700">
          Complete your purchase quickly using <strong>Apple Pay</strong> on
          supported devices.
        </p>
      </div>
    );

  return null;
}
