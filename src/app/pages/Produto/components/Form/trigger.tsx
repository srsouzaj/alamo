import { DialogTrigger } from "@/components/ui/dialog";
import Plus from "@/assets/vectors/plus.svg";
import { memo } from "react";

const Trigger = () => {
  return (
    <DialogTrigger asChild>
      <span className="lg:px-5 not-lg:px-2 whitespace-nowrap h-7.5 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white not-lg:text-xs text-sm font-semibold">
        <Plus width={12} height={12} />
        Adicionar Rotina
      </span>
    </DialogTrigger>
  );
};

export default memo(Trigger);
