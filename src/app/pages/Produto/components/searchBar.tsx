"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Search from "@/assets/vectors/search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 pt-11">
      <div className="relative w-[351px]">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4" />
        <Input placeholder="Buscar..." className="pl-8" />
      </div>

      <Button className="px-4 py-1 bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white font-semibold">
        Buscar
      </Button>

      <Button
        variant="secondary"
        className=" px-4 py-1 bg-slate-900 hover:bg-slate-700 flex gap-1 items-center rounded-md transition-colors duration-200 text-white font-semibold"
      >
        Filtragem Avançada
      </Button>
    </div>
  );
};
export default SearchBar;
