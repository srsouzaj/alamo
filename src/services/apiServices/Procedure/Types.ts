import { OutProcedure } from "./Models";

interface IProcedureApiService {
  consultarProcedimentoById(documentId: string): Promise<OutProcedure>;
  consultarProcedimentos(): Promise<OutProcedure[]>;
}

export default IProcedureApiService;
