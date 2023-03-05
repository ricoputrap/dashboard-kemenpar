import { create } from "zustand";
import { TChampionState, TChampionActions } from "./index.types";

const useChampionStore = create<TChampionState & TChampionActions>(set => ({
  activeDPP: "toba",

  setActiveDPP: (activeDPP) => set({ activeDPP })
}));

export default useChampionStore;