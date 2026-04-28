import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-24">
        <main className="flex grow">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
