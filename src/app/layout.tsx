import type { Metadata } from "next";
import "./globals.css";
import { blink } from "@/fonts/blink";
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
    <html lang="pt-BR" className={`${blink.variable}`}>
      <body className="vsc-initialized font-blink">
        <Providers>
          <div className="container">
            <Navbar />
            {/* <SidebarTrigger /> */}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
