import { InRoutine, OutRoutine } from "./Models";

interface IRoutineApiService {
  consultarRotinaById(rotinaId: string): Promise<OutRoutine>;
  consultarRotinas(): Promise<OutRoutine[]>;
  criarRotina(rotina: InRoutine): Promise<void>;
}

export default IRoutineApiService;
