import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { Label } from "../../../../../components/ui/label";
import Plus from "@/assets/vectors/plus.svg";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import ErrorMessage from "@/components/ErrorMessage";
import { memo } from "react";

const Drugs = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<OutRoutine>();

  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: "items",
  });

  return (
    <div className="w-full flex flex-col gap-1">
      <Label>Medicamentos</Label>
      {itemFields.length > 0 ? (
        itemFields.map((item, index) => (
          <div
            key={item.id}
            className="border border-[var(--border)] p-2 mb-2 rounded space-y-2"
          >
            <Input
              placeholder="Nome do Item"
              {...register(`items.${index}.name` as const, {
                required: true,
              })}
            />
            <Input
              placeholder="Quantidade (ex: 150 mg)"
              {...register(`items.${index}.quantity` as const)}
            />
            <Button
              type="button"
              className="px-5 h-7.5 cursor-pointer bg-red-600 flex gap-1 items-center rounded-md hover:bg-red-900 transition-colors duration-200 text-white text-sm font-semibold"
              onClick={() => removeItem(index)}
            >
              Remover
            </Button>
          </div>
        ))
      ) : (
        <p className="text-xs font-thin text-gray-500 mb-2">
          Nenhum item adicionado.
        </p>
      )}

      <Button
        type="button"
        onClick={() => appendItem({ name: "", quantity: "" })}
        className="px-5 h-7.5 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white text-sm font-semibold"
      >
        <Plus />
        Adicionar Item
      </Button>
      <ErrorMessage message={errors?.items?.message} />
    </div>
  );
};
export default memo(Drugs);
