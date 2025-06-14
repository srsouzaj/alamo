import { AxiosResponse } from "axios";
import api from "../../api";

import { OutRoutine } from "./Models";
import apiRoutes from "@/utils/apiRoutes";
import IRoutineApiService from "./Types";

export class useRoutines implements IRoutineApiService {
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
