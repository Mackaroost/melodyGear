export default function PoductsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
            {children}
        </main>
    );
  }