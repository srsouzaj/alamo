"use client";
import useConsultarRotinas from "../Hooks/useConsultarRotinas";

const RoutinesList = () => {
  const { routines } = useConsultarRotinas();

  return (
    <section className="flex flex-col gap-2 overflow-y-auto px-2 max-h-[600px]">
      {routines.map((routine, index) => {
        return (
          <div
            key={routine.id}
            className={`p-3 rounded cursor-pointer border border-transparent hover:border-1 hover:border-[var(--Primary)] transition-all duration-200 ease-in-out ${
              index % 2 ? "bg-[var(--secondary-white)]" : "bg-white"
            }`}
          >
            <div className="flex justify-between">
              <ul className="flex gap-2 flex-col justify-between">
                <li className="font-semibold text-sm">
                  {routine.hour} – {routine.title}
                </li>
                {routine.items.map((remedy, index) => (
                  <li
                    key={`${index + remedy.name}`}
                    className="font-regular pl-5 text-sm"
                  >
                    {remedy.name} – {remedy.quantity}
                    <ul>
                      {!!remedy?.subitems &&
                        remedy?.subitems?.map((item, index) => (
                          <li
                            key={`${index + item.name}`}
                            className="font-regular pl-5 py-2 text-sm"
                          >
                            {item.name} – {item.quantity}
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-2 flex-col justify-between items-end">
                {routine.macronutrients.map((macro, index) => (
                  <li key={index} className="font-regular text-xs">
                    {macro.name}: {macro.quantity}
                  </li>
                ))}
                <li className="font-regular text-xs text-secondary">
                  {routine.intensity}
                </li>
              </ul>
            </div>
            <p className="text-xs pl-5 text-[var(--secondaryTypography)]">
              Observação: {routine.notes}
            </p>
          </div>
        );
      })}
    </section>
  );
};
export default RoutinesList;
