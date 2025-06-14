import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";

import User from "./user";
import Menu from "./menu";
import NewUser from "./newUser";

const SidebarItemsMenu = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <User />
          <Menu />
          <NewUser />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarItemsMenu;
