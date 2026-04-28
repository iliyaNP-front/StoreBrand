import { Banknote, Headphones, Truck } from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      title: "Fast Delivery",
      desc: "2–3 day average across the US.",
      color: "#3B82F6",
      Icon: Truck,
    },
    {
      title: "Trusted Support",
      desc: "Live chat and email, 7 days a week.",
      color: "#F59E0B",
      Icon: Headphones,
    },
    {
      title: "Secure Payments",
      desc: "PCI compliant and encrypted.",
      color: "#EF4444",
      Icon: Banknote,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <header className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#003d5b]">
          Why us?
        </h3>
        <p className="mt-2 text-[#30638e]/70">What makes us different</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ title, desc, color, Icon }) => (
          <div
            key={title}
            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Icon size={32} color={color} />
              <h4 className="text-lg font-semibold" style={{ color }}>
                {title}
              </h4>
            </div>

            <p className="mt-3 text-sm text-[#30638e]/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
