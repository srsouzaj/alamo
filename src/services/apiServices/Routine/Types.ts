import { OutRoutine } from "./Models";

interface IRoutineApiService {
  consultarRotinaById(rotinaId: string): Promise<OutRoutine>;
  consultarRotinas(): Promise<OutRoutine[]>;
}

export default IRoutineApiService;
