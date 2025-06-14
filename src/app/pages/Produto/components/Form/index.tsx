import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormProvider } from "react-hook-form";
import Description from "./description";
import Divider from "@/components/divider";
import Drugs from "./drugs";
import Macro from "./macro";
import Notes from "./notes";
import { useOutRoutineForm } from "../../Hooks/useOutRoutineForm";

const FormAddRoutines = () => {
  const { methods, handleSubmit, isSubmitting, onSubmit } = useOutRoutineForm();

  return (
    <DialogContent className="sm:max-w-[600px]">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle className="text-[var(--primary)] font-normal text-2xl">
              Adicionar nova rotina
            </DialogTitle>
            <DialogDescription className="text-[var(--primary)] text-md font-thin pb-3 ">
              Adicione uma nova rotina para Marcelo Cavalcante
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 max-w-xl">
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
  );
};

export default FormAddRoutines;
