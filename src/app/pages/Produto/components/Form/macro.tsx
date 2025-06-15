import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import Plus from "@/assets/vectors/plus.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../../components/ui/select";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import ErrorMessage from "@/components/ErrorMessage";
import { memo } from "react";

const Macro = () => {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<OutRoutine>();
  const {
    fields: macroFields,
    append: appendMacro,
    remove: removeMacro,
  } = useFieldArray({
    control,
    name: "macronutrients",
  });

  const macronutrientsWatch = watch("macronutrients");
  const selectedMacros = macronutrientsWatch.map((m) => m.name);

  const availableMacros = ["CHO", "PTN", "LIP"].filter(
    (macro) => !selectedMacros.includes(macro)
  );

  return (
    <div className="w-full flex flex-col gap-1">
      <Label>Macronutrientes</Label>
      {macroFields.map((macro, index) => {
        const macroName = macronutrientsWatch[index]?.name;

        return (
          <div
            key={macro.id}
            className="border border-[var(--border)] p-2 mb-2 rounded space-y-2"
          >
            <Select
              onValueChange={(value) =>
                setValue(`macronutrients.${index}.name`, value, {
                  shouldValidate: true,
                })
              }
              value={macroName}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecionar Macronutriente" />
              </SelectTrigger>
              <SelectContent>
                {["CHO", "PTN", "LIP"].map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    disabled={
                      selectedMacros.includes(option) && option !== macroName
                    }
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Quantidade (ex: 30g)"
              {...register(`macronutrients.${index}.quantity` as const, {
                required: true,
              })}
            />

            <Button
              type="button"
              className="px-5 h-7.5 cursor-pointer bg-red-600 flex gap-1 items-center rounded-md hover:bg-red-900 transition-colors duration-200 text-white text-sm font-semibold"
              onClick={() => removeMacro(index)}
            >
              Remover
            </Button>
          </div>
        );
      })}

      {availableMacros.length > 0 ? (
        <Button
          className="px-5 h-7.5 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white text-sm font-semibold"
          type="button"
          onClick={() => appendMacro({ name: "", quantity: "" })}
        >
          <Plus />
          Adicionar Macronutriente
        </Button>
      ) : (
        <p className="text-xs font-thin text-gray-500">
          Todos os macronutrientes já foram adicionados.
        </p>
      )}
      <ErrorMessage message={errors?.macronutrients?.message} />
    </div>
  );
};

export default memo(Macro);
