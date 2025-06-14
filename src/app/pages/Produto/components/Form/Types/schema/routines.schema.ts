import { z } from "zod";

export const itemSchema: z.ZodType = z.lazy(() =>
  z.object({
    name: z.string().min(1, "Nome do item é obrigatório"),
    quantity: z.string().optional(),
    subitems: z.array(itemSchema).optional(),
  })
);

export const macronutrientSchema = z.object({
  name: z.enum(["CHO", "PTN", "LIP"]),
  quantity: z.string().min(1, "Quantidade é obrigatória"),
});

export const OutRoutineSchema = z.object({
  hour: z.string().min(1, "Horário é obrigatório"),
  title: z.string().min(1, "Título é obrigatório"),
  intensity: z.string().min(1, "Intensidade é obrigatória"),
  notes: z.string().min(1, "Observações são obrigatórias"),
  items: z.array(itemSchema).min(1, "Adicione ao menos um item"),
  macronutrients: z
    .array(macronutrientSchema)
    .min(1, "Adicione ao menos um macronutriente"),
});
