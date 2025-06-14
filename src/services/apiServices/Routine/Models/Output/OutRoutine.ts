interface SubItem {
  nome: string;
  quantidade: string;
}

interface Item {
  nome: string;
  quantidade?: string;
  subitens?: SubItem[];
}

interface Macronutrients {
  CHO: string;
  PTN: string;
  LIP: string;
}

interface Observation {
  nota: string;
}

export interface OutRoutine {
  hora: string;
  titulo: string;
  itens: Item[];
  observacoes: (string | Observation)[];
  macronutrientes: Macronutrients;
  intensidade: string;
}
