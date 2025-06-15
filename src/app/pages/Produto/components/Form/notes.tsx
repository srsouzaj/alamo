import { useFormContext } from "react-hook-form";
import { Label } from "../../../../../components/ui/label";
import { Textarea } from "../../../../../components/ui/textarea";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import ErrorMessage from "@/components/ErrorMessage";
import { memo } from "react";

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

      <ErrorMessage message={errors?.notes?.message} />
    </div>
  );
};

export default memo(Notes);
