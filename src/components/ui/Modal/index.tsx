"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Plus from "@/assets/vectors/plus.svg";

import { FormProvider } from "react-hook-form";
import Divider from "@/components/divider";
import Description from "./description";
import Notes from "./notes";
import Macro from "./macro";
import Drugs from "./drugs";

import { useOutRoutineForm } from "./Hooks/useOutRoutineForm";

const Modal = () => {
  const { methods, handleSubmit, isSubmitting, onSubmit, isOpen, handleModal } =
    useOutRoutineForm();

  return (
    <Dialog open={isOpen} onOpenChange={handleModal}>
      <DialogTrigger asChild>
        <span className="px-5 h-7.5 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white text-sm font-semibold">
          <Plus width={12} height={12} />
          Adicionar Rotina
        </span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-[var(--primary)] ">
                Adicionar nova rotina
              </DialogTitle>
              <DialogDescription className="text-[var(--primary)] pb-3 ">
                Adicione uma nova rotina para Marcelo Cavalcante
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 max-w-xl">
              <Description />
              <Divider />
              <Drugs />
              <Divider />
              <Macro />
              <Divider />
              <Notes />
            </div>

            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="px-5 h-8 cursor-pointer flex gap-1 items-center rounded-md transition-colors duration-200 hover:bg-gray-300 text-sm font-semibold"
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button
                disabled={isSubmitting}
                className="px-5 h-8 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white text-sm font-semibold"
              >
                Salvar Procedimento
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
