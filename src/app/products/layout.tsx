import AsideCategories from "../../components/products/AsideCategories";

export default function PoductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex">
        <AsideCategories />
        <div className="container rounded m-4 bg-slate-900">{children}</div>
      </main>
    </>
  );
}
