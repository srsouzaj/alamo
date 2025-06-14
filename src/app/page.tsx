import Plus from "@/assets/vectors/plus.svg";

export default function Home() {
  return (
    <main>
      <section className="flex justify-between">
        <h1 className="text-[28px] font-semibold text-[var(--primary)]">
          Gestão de rotinas de laboratório
        </h1>
        <span className="px-4 py-1.5 bg-[var(--secondary)] flex gap-1 items-center rounded hover:bg-[var(--tertiary)] transition-colors duration-200 text-white font-semibold">
          <Plus width={12} height={12} />
          Adicionar Rotina
        </span>
      </section>
      <section className="flex flex-col gap-2 border border-red-500 p-3">
        <div className="flex justify-between">
          <ul className="flex gap-2 flex-col justify-between">
            <li className="font-semibold text-sm">
              10:00 – Procedimento Matinal
            </li>
            <li className="font-regular text-sm">Solução A – 5 mL</li>
            <li className="font-regular text-sm">Composto B ou C – 250 mg</li>
            <li className="font-regular text-sm">
              Reagente Mediolab – 2 gotas{" "}
            </li>
            <li className="font-regular text-sm">
              Observação: Misturar em recipiente estéril
            </li>
            <li className="font-regular text-sm">
              Catalisador (CATPURE) – 5 mg
            </li>
          </ul>
          <ul className="flex gap-2 flex-col justify-between items-end">
            <li className="font-regular text-xs">CHO: 26g</li>
            <li className="font-regular text-xs">PTN: 25g</li>
            <li className="font-regular text-xs">LIP:1.3g</li>
            <li className="font-regular text-xs text-secondary">215 mAU</li>
          </ul>
        </div>
        <li className="text-xs text-[var(--secondaryTypography)]">
          Observação: Executar em fluxo laminar
        </li>
      </section>
    </main>
  );
}
