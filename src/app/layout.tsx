import type { Metadata } from "next";
import "./globals.css";
import { blink } from "@/fonts/blink";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Navbar from "@/components/Navbar";

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
        <SidebarProvider>
          <AppSidebar />
          <div className="container">
            <Navbar />
            {/* <SidebarTrigger /> */}
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
