import { OutRoutine } from "./Models";

interface IRoutineApiService {
  consultarProcedimentoById(documentId: string): Promise<OutRoutine>;
  consultarProcedimentos(): Promise<OutRoutine[]>;
}

export default IRoutineApiService;
