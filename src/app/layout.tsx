import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "HWY MAGICIAN | Custom Culture Streetwear",
  description: "The high-octane gear for the asphalt-obsessed. Garage-built quality, race-inspired aesthetics since 2024.",
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary">
        <CartProvider>
          <Header />
          <div className="flex-grow pt-20 pb-24 md:pb-0 flex flex-col">
            {children}
          </div>
          <BottomNav />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
