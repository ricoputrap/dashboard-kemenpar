import { create } from "zustand";
import { TState, TActions } from "./index.types";

const useNarasumberStore = create<TState & TActions>(set => ({
  jumlahTotal: {
    totalLaki: 0,
    totalPerempuan: 0
  },

  setJumlahTotal: (totalLaki, totalPerempuan) => set({
    jumlahTotal: { totalLaki, totalPerempuan }
  })
}));

export default useNarasumberStore;