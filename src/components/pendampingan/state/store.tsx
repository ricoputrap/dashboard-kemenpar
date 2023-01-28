import { create } from "zustand";
import { initialStatistikTotal, statistikPendampingan } from "./initialData";
import { TStatistikPendampingan } from "../types/statistik.types";
import { TDataStatistikTotal, TPendampinganState } from "./index.types";

const useStore = create<TPendampinganState>((set) => ({
  statistikPendampingan,
  statistikTotal: initialStatistikTotal,
  
  setDataStatistik: (data: TStatistikPendampingan[]) => set({
    statistikPendampingan: data
  }),
  setDataStatistikTotal: (data: TDataStatistikTotal) => set({
    statistikTotal: data
  })
}));

export default useStore;