import { create } from "zustand";
import { TStatistikActions, TStatistikState } from "./index.types";

const useStatistikStore = create<TStatistikState & TStatistikActions>((set, get) => ({
  statistikTotalAB: {
    totalLaki: 0,
    totalPerempuan: 0,
    totalPeserta: 0
  },
  statistikTotalC: {
    totalLaki: 0,
    totalPerempuan: 0,
    totalPeserta: 0
  },
  statistikPeserta: [],

  setStatistikTotalAB: (statistikTotalAB) => set({ statistikTotalAB }),
  setStatistikTotalC: (statistikTotalC) => set({ statistikTotalC }),
  setStatistikPeserta: (statistikPeserta) => set({ statistikPeserta })
}));

export default useStatistikStore;