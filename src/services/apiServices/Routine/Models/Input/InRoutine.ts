interface Items {
  name: string;
  quantity?: string;
}

export interface InRoutine {
  hour: string;
  title: string;
  items: Items[];
  notes: string;
  macronutrients: {
    name: "CHO" | "PTN" | "LIP";
    quantity: string;
  }[];
  intensity: string;
}
