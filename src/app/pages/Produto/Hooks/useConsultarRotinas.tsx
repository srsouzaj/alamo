"use client";

import useServices from "@/services";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import { useQuery } from "@tanstack/react-query";

const useConsultarRotinas = () => {
  const { routines: services } = useServices();

  const { data, isLoading: loadingDocument } = useQuery({
    queryKey: ["consultar-documentos"],
    queryFn: () => services.consultarRotinas(),
  });

  return {
    routines: data ?? ([] as OutRoutine[]),
    loadingDocument,
  };
};

export default useConsultarRotinas;
