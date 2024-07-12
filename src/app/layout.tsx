import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UPC Labs",
  description:
    "Plataforma de gestion de laboratorios de la universidad piloto de colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="h-full flex flex-col ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
