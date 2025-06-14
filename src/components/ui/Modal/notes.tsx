import { useFormContext } from "react-hook-form";
import { Label } from "../label";
import { Textarea } from "../textarea";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import ErrorMessage from "@/components/ErrorMessage";

const Notes = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OutRoutine>();

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="notes">Observações</Label>
      <Textarea
        id="notes"
        {...register("notes")}
        placeholder="Agitar por 3 minutos antes de aplicar"
      />

      <ErrorMessage message={errors?.macronutrients?.message} />
    </div>
  );
};

export default Notes;
