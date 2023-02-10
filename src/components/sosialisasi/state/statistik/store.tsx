import { create } from "zustand";
import { TStatistikActions, TStatistikPesertaPertahun, TStatistikState } from "./index.types";
import { initialStatistikPesertaPertahun, initialStatistikTotal, initialTahun } from "./initialData";
import { TStatistikTotal } from "../../types/statistik.types";
import { TStatistikPeserta } from "../../../reusables/organisms/StatistikPeserta/index.types";

const useStatistikStore = create<TStatistikState & TStatistikActions>((set, get) => ({
  statistikPesertaPertahun: initialStatistikPesertaPertahun,
  statistikTotal: initialStatistikTotal,

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