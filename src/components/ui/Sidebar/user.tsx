import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { SidebarGroupLabel } from "../sidebar";
import Link from "next/link";

const User = () => {
  return (
    <SidebarGroupLabel>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://i.ibb.co/sv0ZS9qS/background.webp" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          Marcelo Cavalcante
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer hover:bg-blue-100">
            <Link href="/">Perfil</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer hover:bg-blue-100">
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarGroupLabel>
  );
};

export default User;
