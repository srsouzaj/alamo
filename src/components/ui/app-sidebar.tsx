import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Home from "@/assets/vectors/Home.svg";
import Contact from "@/assets/vectors/Profile.svg";
import Calendar1 from "@/assets/vectors/Calendar.svg";
import CircleDollarSign from "@/assets/vectors/Dollar.svg";
import SquarePen from "@/assets/vectors/Edit.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Página Inicial",
    url: "#",
    icon: Home,
  },
  {
    title: "Clientes",
    url: "#",
    icon: Contact,
  },
  {
    title: "Agenda",
    url: "#",
    icon: Calendar1,
  },
  {
    title: "Financeiro",
    url: "#",
    icon: CircleDollarSign,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Avatar>
              <AvatarImage src="https://i.ibb.co/sv0ZS9qS/background.webp" />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
            Marcelo Cavalcante
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon width={24} height={24} />
                      <span className="font-semibold text-sm text-[var(--primary)]">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>
            <div className="flex flex-col gap-2">
              <Link
                className="flex gap-2 items-center font-semibold text-sm text-[var(--primary)]"
                href="/"
              >
                <SquarePen width={16} height={16} className="w-fit" />
                Cadastro
              </Link>
              <Link
                href="/"
                className="font-semibold pl-6.5 text-sm text-[var(--secondary)]"
              >
                Rotinas
              </Link>
            </div>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
