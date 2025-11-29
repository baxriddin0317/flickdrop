import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import MobileNavigation from "@/components/common/MobileNavigation";
import WeaponSlider from "@/components/common/WeaponSlider";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full py-2.5 sm:py-4 lg:py-6 overflow-x-hidden relative z-0">
        <WeaponSlider />
      </div>
      <MobileNavigation />
      <main className="mb-40">
        {children}
      </main>

      <Footer />
    </div>
  );
}

