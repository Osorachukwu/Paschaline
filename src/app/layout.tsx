import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";
import AosProvider from "@/components/AosProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paschaline's Consult | Executive & Educational Writing Consultancy",
  description:
    "At Paschaline's Consult, we deliver high-quality, customized solutions for corporate SOPs, grant proposals, pitch decks, and scholarship applications that drive results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AosProvider>
          <section className="overflow-hidden min-h-screen flex flex-col justify-between">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </section>
        </AosProvider>
      </body>
    </html>
  );
}