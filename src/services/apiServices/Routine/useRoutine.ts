import { AxiosResponse } from "axios";
import api from "../../api";

import { InRoutine, OutRoutine } from "./Models";
import apiRoutes from "@/utils/apiRoutes";
import IRoutineApiService from "./Types";

export class useRoutines implements IRoutineApiService {
  async criarRotina(rotina: InRoutine): Promise<void> {
    try {
      await api.post<InRoutine, void>(apiRoutes.Routines.url(), rotina);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async consultarRotinas(): Promise<OutRoutine[]> {
    try {
      const data = await api.get<void, AxiosResponse<OutRoutine[]>>(
        apiRoutes.Routines.url()
      );
      return data?.data ?? ([] as OutRoutine[]);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async consultarRotinaById(rotinaId: string): Promise<OutRoutine> {
    try {
      const data = await api.get<void, AxiosResponse<OutRoutine>>(
        apiRoutes.Routines.byId.url(rotinaId)
      );
      return data?.data ?? ({} as OutRoutine);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
