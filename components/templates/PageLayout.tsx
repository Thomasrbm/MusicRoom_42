import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

function PageLayout({ children, hideFooter = false }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Header />
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export { PageLayout };
