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
  statistikPesertaAB: [],
  statistikPesertaC: [],
  jenisPelatihan: "pelatihan_a_&_b",

  setStatistikTotalAB: (statistikTotalAB) => set({ statistikTotalAB }),
  setStatistikTotalC: (statistikTotalC) => set({ statistikTotalC }),
  setStatistikPeserta: (statistikPeserta) => set({ statistikPeserta }),

  setStatistikPesertaAB: (statistikPesertaAB) => set({ statistikPesertaAB }),
  setStatistikPesertaC: (statistikPesertaC) => set({ statistikPesertaC }),
  setJenisPelatihan: (jenisPelatihan) => set({ jenisPelatihan })
}));

export default useStatistikStore;