"use client";
import { memo } from "react";
import useRoutineSearch from "../Hooks/useRoutineSearch";
import RoutinesCardList from "./routinesCardList";
import SearchBar from "./searchBar";
import Divider from "@/components/divider";

const Routines = () => {
  const {
    inputSearch,
    setInputSearch,
    handleSearch,
    filteredRoutines,
    loadingRoutine,
  } = useRoutineSearch();
  return (
    <>
      <SearchBar
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        onSearch={handleSearch}
      />

      <Divider />

      <RoutinesCardList routines={filteredRoutines} loading={loadingRoutine} />
    </>
  );
};

export default memo(Routines);
