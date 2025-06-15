import Modal from "@/app/pages/Produto/components/Form/modal";
import { memo } from "react";

const HeaderRoutine = () => {
  return (
    <section className="flex justify-between">
      <h1 className="lg:text-3xl not-lg:text-lg font-light text-[var(--primary)]">
        Gestão de rotinas de laboratório
      </h1>
      <Modal />
    </section>
  );
};

export default memo(HeaderRoutine);
