"use client";

import SidebarItemsMenu from "@/components/ui/Sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <SidebarItemsMenu />
        {children}
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default Providers;
