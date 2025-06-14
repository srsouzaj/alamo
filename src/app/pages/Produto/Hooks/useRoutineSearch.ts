"use client";
import { useState, useMemo, useCallback } from "react";
import useConsultarRotinas from "./useConsultarRotinas";

const useRoutineSearch = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { routines, loadingRoutine } = useConsultarRotinas();

  const handleSearch = useCallback(() => {
    setSearchTerm(inputSearch);
  }, [inputSearch]);

  const filteredRoutines = useMemo(() => {
    if (!routines) return [];
    return routines.filter((routine) =>
      routine.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [routines, searchTerm]);

  return {
    inputSearch,
    setInputSearch,
    searchTerm,
    handleSearch,
    filteredRoutines,
    loadingRoutine,
  };
};

export default useRoutineSearch;
