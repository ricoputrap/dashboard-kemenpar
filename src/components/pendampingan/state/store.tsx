import { create } from "zustand";
import { initialStatistikTotal, statistikPendampingan } from "./initialData";
import { TStatistikPendampingan } from "../types/statistik.types";
import { TDataStatistikTotal, TPendampinganState } from "./index.types";
import { TPendampinganDesa, TPendampinganDesaPerDPP } from "../types/laporan.types";

const useStore = create<TPendampinganState>((set, get) => ({

  // STATISTIK
  statistikPendampingan,
  statistikTotal: initialStatistikTotal,
  setDataStatistik: (data: TStatistikPendampingan[]) => set({
    statistikPendampingan: data
  }),
  setDataStatistikTotal: (data: TDataStatistikTotal) => set({
    statistikTotal: data
  }),

  // LAPORAN
  activeDPP: "lombok",
  dataPendampinganDesaPerDPP: [],
  setActiveDPP: (dpp: string) => set({
    activeDPP: dpp
  }),
  getDataPendampinganByDPP: (dpp: string) => {
    const dataPendampinganDesaPerDPP = get().dataPendampinganDesaPerDPP;
    const index: number = dataPendampinganDesaPerDPP.findIndex(
      item => item.dpp == dpp
    );

    if (index === -1)
      return [];

    return dataPendampinganDesaPerDPP[index].data;
  },
  setDataPendampinganPerDPP: (
    dpp: string,
    data: TPendampinganDesa[]
  ) => {
    const newData: TPendampinganDesaPerDPP = { dpp, data };
    const index: number = get().dataPendampinganDesaPerDPP.findIndex(
      item => item.dpp == dpp
    );

    if (index == -1) {
      set({
        dataPendampinganDesaPerDPP: [
          ...get().dataPendampinganDesaPerDPP,
          newData
        ]
      });
    }
    else {
      const updatedDataPendampinganDesaPerDPP = [...get().dataPendampinganDesaPerDPP];
      updatedDataPendampinganDesaPerDPP[index] = newData;
      set({
        dataPendampinganDesaPerDPP: updatedDataPendampinganDesaPerDPP
      });
    }
  }
}));

export default useStore;