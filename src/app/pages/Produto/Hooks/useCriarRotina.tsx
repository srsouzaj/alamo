"use client";

import useServices from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InRoutine } from "@/services/apiServices/Routine/Models";
import { toast } from "sonner";

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
      toast("Uma nova rotina foi adicionada", {
        description: "Rotina adicionado com sucesso",
      });
    },
  });

  return {
    criarRotina,
    loadingCriarRotina,
    isSuccess,
  };
};

export default useCriarRotina;
