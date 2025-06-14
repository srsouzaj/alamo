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
                    <a href={item.url}>
                      <item.icon width={24} height={24} />
                      <span className="font-semibold text-sm text-[var(--primary)]">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel>
            <SquarePen width={24} height={24} />
            <span className="font-semibold text-sm text-[var(--primary)]">
              Cadastro
            </span>
          </SidebarGroupLabel>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
