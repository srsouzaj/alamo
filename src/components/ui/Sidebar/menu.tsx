import Link from "next/link";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../sidebar";
import Home from "@/assets/vectors/Home.svg";
import Contact from "@/assets/vectors/Profile.svg";
import Calendar1 from "@/assets/vectors/Calendar.svg";
import CircleDollarSign from "@/assets/vectors/Dollar.svg";

const Menu = () => {
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
  return (
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
  );
};

export default Menu;
