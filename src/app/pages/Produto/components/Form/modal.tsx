"use client";

import FormAddRoutines from "@/app/pages/Produto/components/Form";
import Trigger from "@/app/pages/Produto/components/Form/trigger";
import { useOutRoutineForm } from "@/app/pages/Produto/Hooks/useOutRoutineForm";
import { Dialog } from "@radix-ui/react-dialog";

const Modal = () => {
  const { isOpen, handleModal } = useOutRoutineForm();

  return (
    <Dialog open={isOpen} onOpenChange={handleModal}>
      <Trigger />
      <FormAddRoutines />
    </Dialog>
  );
};

export default Modal;
