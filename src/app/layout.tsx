import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";
import AosProvider from "@/components/AosProvider";

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Paschaline's Consult | Strategic Advisory & Career Growth",
  description:
    "Premium advisory, executive communication, financial modeling, and talent acceleration for ambitious leaders and professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${manrope.variable}`}>
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