import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { SidebarGroupLabel } from "../sidebar";

const User = () => {
  return (
    <SidebarGroupLabel>
      <Avatar>
        <AvatarImage src="https://i.ibb.co/sv0ZS9qS/background.webp" />
        <AvatarFallback>MC</AvatarFallback>
      </Avatar>
      Marcelo Cavalcante
    </SidebarGroupLabel>
  );
};

export default User;
