import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paschaline Creatives and Consult",
  description: "At Paschaline&apos;s Consult, we understand the importance of communication and presentation in achieving your goals, which is why we are committed to delivering high-quality, customized solutions that resonate with your audience and drive results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="overflow-hidden">
          <NavBar />
          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
