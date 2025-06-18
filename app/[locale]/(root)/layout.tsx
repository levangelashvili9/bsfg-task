import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BSFG Task",
  description: "BSFG Task Root layout",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default RootLayout;
