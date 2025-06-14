"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { OutRoutineSchema } from "../components/Form/Types/schema/routines.schema";
import { OutRoutineTypes } from "../components/Form/Types/interface/routines.interface";
import transformInitialValues from "../components/Form/utils/defaultValues";
import useCriarRotina from "@/app/pages/Produto/Hooks/useCriarRotina";

export const useFormModalRotina = () => {
  const { criarRotina } = useCriarRotina();

  const defaultValues: OutRoutineTypes = useMemo(
    () => transformInitialValues(),
    []
  );

  const methods = useForm<OutRoutineTypes>({
    resolver: zodResolver(OutRoutineSchema),
    defaultValues,
    reValidateMode: "onChange",
  });

  const {
    formState: { isSubmitting },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: OutRoutineTypes) => {
    criarRotina(data);
    methods.reset();
  };

  return {
    methods,
    handleSubmit,
    isSubmitting,
    onSubmit,
  };
};
