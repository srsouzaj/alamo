"use client";

import useServices from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InRoutine } from "@/services/apiServices/Routine/Models";

const useCriarRotina = () => {
  const { routines: services } = useServices();
  const queryClient = useQueryClient();

  const {
    mutate: criarRotina,
    isPending: loadingCriarRotina,
    isSuccess,
  } = useMutation({
    mutationFn: (rotina: InRoutine) => services.criarRotina(rotina),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultar-documentos"] });
    },
  });

  return {
    criarRotina,
    loadingCriarRotina,
    isSuccess,
  };
};

export default useCriarRotina;
