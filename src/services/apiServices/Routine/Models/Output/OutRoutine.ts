export interface Item {
  name: string;
  quantity?: string;
  subitems?: Item[];
}

export interface Macronutrient {
  name: string;
  quantity: string;
}

export interface OutRoutine {
  id: number;
  hour: string;
  title: string;
  items: Item[];
  notes: string;
  macronutrients: Macronutrient[];
  intensity: string;
}
