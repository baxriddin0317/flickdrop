import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileMenu from "@/components/common/MobileMenu";
import WeaponSlider from "@/components/common/WeaponSlider";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full py-6 overflow-x-hidden relative z-10">
        <WeaponSlider />
      </div>
      <MobileMenu />
      <main className="mb-40">
        {children}
      </main>

      <Footer />
    </div>
  );
}

