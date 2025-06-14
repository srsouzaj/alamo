"use client";

import { OutRoutine } from "@/services/apiServices/Routine/Models";
import React from "react";

interface RoutinesListProps {
  routines: OutRoutine[];
  loading: boolean;
}

const RoutinesCardList = ({ routines, loading }: RoutinesListProps) => {
  return (
    <section className="flex flex-col gap-2 overflow-y-auto pr-2 h-3/4">
      {loading && <h1>Carregando...</h1>}

      {!loading && (!routines || routines.length === 0) && (
        <h1>Não há rotinas</h1>
      )}

      {routines.map((routine, index) => (
        <div
          key={routine.id}
          className={`p-3 rounded-md cursor-pointer border border-transparent hover:border-1 hover:border-[var(--Primary)] transition-all duration-200 ease-in-out ${
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
                      remedy.subitems.map((item, subIndex) => (
                        <li
                          key={`${subIndex + item.name}`}
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

          <p className="text-xs pl-5 text-[var(--secondaryTypography)] mt-2">
            Observação: {routine.notes}
          </p>
        </div>
      ))}
    </section>
  );
};

export default React.memo(RoutinesCardList);
