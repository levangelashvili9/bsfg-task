import type { Metadata } from "next";

import { Navbar } from "@/features/shared/components/layouts/navbar";
import { Footer } from "@/features/shared/components/layouts/footer";
// import { Tabbar } from "@/features/shared/components/layouts/tabbar";

export const metadata: Metadata = {
  title: "BSFG Task",
  description: "BSFG Task Root layout",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="root-container h-screen pb-9 pt-[70px] 1024:pb-10 1024:pt-[75px]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
