import { create } from "zustand";
import { TStatistikActions, TStatistikPesertaPertahun, TStatistikState } from "./index.types";
import { initialStatistikPesertaPertahun, initialStatistikTotal, initialTahun } from "./initialData";
import { TStatistikPeserta, TStatistikTotal } from "../../types/statistik.types";

const useStatistikStore = create<TStatistikState & TStatistikActions>((set, get) => ({
  tahun: initialTahun,
  statistikPesertaPertahun: initialStatistikPesertaPertahun,
  statistikTotal: initialStatistikTotal,

  setTahun: (tahun: number) => set({
    tahun
  }),

  setStatistikPesertaPertahun: (data: TStatistikPeserta[], tahun: number) => {
    const statistikPesertaPertahun: TStatistikPesertaPertahun = get().statistikPesertaPertahun;

    // compute value
    const updatedValue: TStatistikPesertaPertahun = {
      ...statistikPesertaPertahun,
      [tahun]: data
    }

    // update value
    set({ statistikPesertaPertahun: updatedValue })
  },

  setStatistikTotal: (data: TStatistikTotal) => set({
    statistikTotal: data
  })
}));

export default useStatistikStore;