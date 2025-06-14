import Link from "next/link";
import { SidebarGroupLabel } from "../sidebar";
import SquarePen from "@/assets/vectors/Edit.svg";

const NewUser = () => {
  return (
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
  );
};

export default NewUser;
