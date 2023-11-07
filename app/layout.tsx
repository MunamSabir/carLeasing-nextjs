import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components";
import { Footer } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
