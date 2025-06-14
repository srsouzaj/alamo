import Alamo from "@/assets/vectors/alamo.svg";
import Task from "@/assets/vectors/task.svg";
import Notification from "@/assets/vectors/notification.svg";
import Info from "@/assets/vectors/info.svg";
import Config from "@/assets/vectors/config.svg";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container py-7.5 flex justify-between items-center">
      <h1 className="font-medium text-sm">Cadastros</h1>
      <section className="flex gap-3.5 items-center">
        <Link href="/">
          <Alamo />
        </Link>
        <Link
          href={"/"}
          className="bg-[var(--secondary)] hover:bg-[var(--tertiary)] transition-colors duration-200 font-semibold flex w-fit text-white items-center justify-center gap-1 px-2 py-1 rounded"
        >
          <Task width={18} height={18} />
          Tarefas
        </Link>
        <aside className="flex gap-2 items-center">
          <Link href={"/"}>
            <Notification width={17} height={17} />
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
