import Alamo from "@/assets/vectors/alamo.svg";
import Task from "@/assets/vectors/task.svg";
import Notification from "@/assets/vectors/notification.svg";
import Info from "@/assets/vectors/info.svg";
import Config from "@/assets/vectors/config.svg";

import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

const Navbar = () => {
  return (
    <nav className="lg:py-7.5 not-lg:py-8 flex justify-between items-center">
      <span className="flex gap-1 items-center">
        <SidebarTrigger className="lg:hidden" />
        <h1 className="font-medium text-sm">Cadastros</h1>
      </span>
      <section className="flex gap-3.5 items-center">
        <Link href="/">
          <Alamo />
        </Link>
        <Link
          href={"/"}
          className="bg-[var(--secondary)] hover:bg-[var(--tertiary)] transition-colors duration-200 font-semibold flex w-fit h-6 text-xs text-white items-center justify-center gap-1 px-2 py-1 rounded-md"
        >
          <Task width={14} height={14} />
          Tarefas
        </Link>
        <aside className="flex gap-2 items-center">
          <Link className="relative" href={"/"}>
            <Notification width={17} height={17} />
            <span className="absolute rounded-full bottom-[-1px] right-[-1px] bg-[#15BE53] w-1.5 h-1.5 block" />
          </Link>
          <Link href={"/"}>
            <Info width={17} height={17} />
          </Link>
          <Link href={"/"}>
            <Config width={17} height={17} />
          </Link>
        </aside>
      </section>
    </nav>
  );
};
export default Navbar;
