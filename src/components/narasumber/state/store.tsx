import { create } from "zustand";
import { TState, TActions } from "./index.types";

const useNarasumberStore = create<TState & TActions>(set => ({
  jumlahTotal: {
    totalLaki: 0,
    totalPerempuan: 0
  },
  komposisi: [],

  setJumlahTotal: (totalLaki, totalPerempuan) => set({
    jumlahTotal: { totalLaki, totalPerempuan }
  }),
  setKomposisi: (komposisi) => set({ komposisi })
}));

export default useNarasumberStore;