import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazon 2.0",
  description: "A redesigned version of Amazon",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex relative min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <main className="mx-7 pt-16 pb-20">
              {modal}
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
