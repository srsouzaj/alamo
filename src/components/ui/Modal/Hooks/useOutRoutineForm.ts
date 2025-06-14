"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo, useCallback, useState } from "react";
import { OutRoutineSchema } from "../Types/schema/routines.schema";
import { OutRoutineTypes } from "../Types/interface/routines.interface";
import transformInitialValues from "../utils/defaultValues";
import useCriarRotina from "@/app/pages/Produto/Hooks/useCriarRotina";

export const useOutRoutineForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { criarRotina } = useCriarRotina();

  const handleModal = useCallback((value: boolean) => setIsOpen(value), []);

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
    try {
      console.log("OutRoutine:", data);
      criarRotina(data);
      methods.reset();
      await new Promise((res) => setTimeout(res, 300));
      handleModal(false);
    } catch (err) {
      console.error("Erro ao salvar rotina:", err);
    }
  };

  return {
    methods,
    handleSubmit,
    isSubmitting,
    onSubmit,
    isOpen,
    handleModal,
  };
};
