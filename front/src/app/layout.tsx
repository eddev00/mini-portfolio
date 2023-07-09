import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Image from "next/image";
import gif1 from "../../public/gif1.gif";

export const metadata: Metadata = {
  title: "Baarar",
  description: "Mohamed Baarar Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" font-fira ">
        <Grid />
        <Navbar />
        <div className="px-6 max-w-xl mx-auto flex flex-col gap-8 py-8">
          <Image className="self-center " src={gif1} alt="gif2" />
        </div>

        {children}

        <Footer />
      </body>
    </html>
  );
}
