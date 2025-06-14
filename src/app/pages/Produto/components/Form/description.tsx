import { useFormContext } from "react-hook-form";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import ErrorMessage from "@/components/ErrorMessage";

const Description = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OutRoutine>();
  return (
    <>
      <div className="flex flex-col gap-1">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          {...register("title", { required: true })}
          placeholder="Exemplo: Procedimento de Meio-dia"
        />
        <ErrorMessage message={errors.title?.message} />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-full flex flex-col gap-1">
          <Label htmlFor="hour">Horário</Label>
          <Input
            type="time"
            id="hour"
            {...register("hour", { required: true })}
            placeholder="13:00"
          />
          <ErrorMessage message={errors.hour?.message} />
        </div>
        <div className="w-full flex flex-col gap-1">
          <Label htmlFor="intensity">Intensidade</Label>
          <Input
            id="intensity"
            {...register("intensity")}
            placeholder="Digite a intensidade"
          />
          <ErrorMessage message={errors.intensity?.message} />
        </div>
      </div>
    </>
  );
};

export default Description;
