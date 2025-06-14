import { AxiosResponse } from "axios";
import api from "../../api";
import IDocumentApiService from "./Types";
import { OutRoutine } from "./Models";
import apiRoutes from "@/utils/apiRoutes";

export class useDocument implements IDocumentApiService {
  async consultarProcedimentos(): Promise<OutRoutine[]> {
    try {
      const data = await api.get<void, AxiosResponse<OutRoutine[]>>(
        apiRoutes.Routines.url()
      );
      return data?.data ?? ([] as OutRoutine[]);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async consultarProcedimentoById(documentId: string): Promise<OutRoutine> {
    try {
      const data = await api.get<void, AxiosResponse<OutRoutine>>(
        apiRoutes.Routines.byId.url(documentId)
      );
      return data?.data ?? ({} as OutRoutine);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
