import { create } from "zustand";
import { TChampionState, TChampionActions, TLaporanPerDPP } from "./index.types";

const useChampionStore = create<TChampionState & TChampionActions>((set, get) => ({
  activeDPP: "lombok",
  laporanPerDPP: {},

  setActiveDPP: (activeDPP) => set({ activeDPP }),
  setLaporanPerDPP: (dpp, daftarLaporan) => {
    const laporanPerDPP: TLaporanPerDPP = get().laporanPerDPP;
        
    set({
      laporanPerDPP: {
        ...laporanPerDPP,
        [dpp]: daftarLaporan
      }
    })
  },

  getLaporanByDPP: (dpp) => {
    const laporanPerDPP: TLaporanPerDPP = get().laporanPerDPP;

    if (!laporanPerDPP.hasOwnProperty(dpp))
      return [];

    return laporanPerDPP[dpp];
  }
}));

export default useChampionStore;