interface Macronutrients {
  CHO: string;
  PRO: string;
  FAT: string;
}

export interface OutProcedure {
  time: string;
  title: string;
  items: string[];
  notes: string[];
  macronutrients: Macronutrients;
  intensity: string;
}
