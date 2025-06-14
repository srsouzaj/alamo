import Plus from "@/assets/vectors/plus.svg";
import React from "react";

const HeaderRoutine = () => {
  return (
    <section className="flex justify-between">
      <h1 className="text-3xl font-light text-[var(--primary)]">
        Gestão de rotinas de laboratório
      </h1>
      <span className="px-5 h-7.5 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white text-sm font-semibold">
        <Plus width={12} height={12} />
        Adicionar Rotina
      </span>
    </section>
  );
};

export default React.memo(HeaderRoutine);
