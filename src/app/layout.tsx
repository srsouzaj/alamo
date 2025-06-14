import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/Providers";

export const metadata: Metadata = {
  title: "Alamo",
  description: "You can just do things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="vsc-initialized font-blink overflow-hidden">
        <Providers>
          <div className="container h-full">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
