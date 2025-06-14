export interface OutDrugs {
  name: string;
  quantity?: string;
  subitems?: OutDrugs[];
}

export interface OutMacronutrient {
  name: string;
  quantity: string;
}

export interface OutRoutine {
  id: number;
  hour: string;
  title: string;
  items: OutDrugs[];
  notes: string;
  macronutrients: OutMacronutrient[];
  intensity: string;
}
