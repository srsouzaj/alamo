"use client";

import useServices from "@/services";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import { useQuery } from "@tanstack/react-query";

const useConsultarRotinas = () => {
  const { routines } = useServices();

  const { data, isLoading: loadingDocument } = useQuery({
    queryKey: ["consultar-documentos"],
    queryFn: () => routines.consultarRotinas(),
  });

  return {
    routine: data ?? ([] as OutRoutine[]),
    loadingDocument,
  };
};

export default useConsultarRotinas;
