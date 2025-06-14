import Plus from "@/assets/vectors/plus.svg";
import RoutinesList from "./pages/Produto/components/routinesList";
import SearchBar from "./pages/Produto/components/searchBar";

export default function Home() {
  return (
    <main className="h-screen w-full pb-10">
      <section className="flex justify-between">
        <h1 className="text-3xl font-light text-[var(--primary)]">
          Gestão de rotinas de laboratório
        </h1>
        <span className="px-5 h-7.5 cursor-pointer bg-[var(--secondary)] flex gap-1 items-center rounded-md hover:bg-[var(--tertiary)] transition-colors duration-200 text-white text-sm font-semibold">
          <Plus width={12} height={12} />
          Adicionar Rotina
        </span>
      </section>
      <SearchBar />
      <div className="w-full h-px bg-[#E4E4E4] my-3" />
      <RoutinesList />
    </main>
  );
}
