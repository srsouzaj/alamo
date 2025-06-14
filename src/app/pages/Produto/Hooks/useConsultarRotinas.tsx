"use client";

import useServices from "@/services";
import { OutRoutine } from "@/services/apiServices/Routine/Models";
import { useQuery } from "@tanstack/react-query";

const useConsultarRotinas = () => {
  const { routines: services } = useServices();

  const { data, isLoading: loadingRoutine } = useQuery({
    queryKey: ["consultar-documentos"],
    queryFn: () => services.consultarRotinas(),
  });

  return {
    routines: data ?? ([] as OutRoutine[]),
    loadingRoutine,
  };
};

export default useConsultarRotinas;
