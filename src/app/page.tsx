import Plus from "@/assets/vectors/plus.svg";
import RoutinesList from "./pages/Produto/components/routinesList";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <section className="flex justify-between">
        <h1 className="text-[28px] font-semibold text-[var(--primary)]">
          Gestão de rotinas de laboratório
        </h1>
        <span className="px-4 py-1.5 bg-[var(--secondary)] flex gap-1 items-center rounded hover:bg-[var(--tertiary)] transition-colors duration-200 text-white font-semibold">
          <Plus width={12} height={12} />
          Adicionar Rotina
        </span>
      </section>
      <RoutinesList />
    </main>
  );
}
