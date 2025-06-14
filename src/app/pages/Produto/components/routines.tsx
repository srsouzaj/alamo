"use client";
import React from "react";
import useRoutineSearch from "../Hooks/useRoutineSearch";
import RoutinesCardList from "./routinesCardList";
import SearchBar from "./searchBar";

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

      <div className="w-full h-px bg-[#E4E4E4] my-3" />

      <RoutinesCardList routines={filteredRoutines} loading={loadingRoutine} />
    </>
  );
};

export default React.memo(Routines);
