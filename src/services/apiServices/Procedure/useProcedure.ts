import { AxiosResponse } from "axios";
import api from "../../api";
import IDocumentApiService from "./Types";
import { OutProcedure } from "./Models";
import apiRoutes from "@/utils/apiRoutes";

export class useDocument implements IDocumentApiService {
  async consultarProcedimentos(): Promise<OutProcedure[]> {
    try {
      const data = await api.get<void, AxiosResponse<OutProcedure[]>>(
        apiRoutes.procedures.url()
      );
      return data?.data ?? ([] as OutProcedure[]);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async consultarProcedimentoById(documentId: string): Promise<OutProcedure> {
    try {
      const data = await api.get<void, AxiosResponse<OutProcedure>>(
        apiRoutes.procedures.byId.url(documentId)
      );
      return data?.data ?? ({} as OutProcedure);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
