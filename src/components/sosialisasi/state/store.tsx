import { create } from "zustand";

type TState = {
  tahun: number;
}

type TActions = {
  setTahun: (tahun: number) => void;
}

const useSosialisasiStore = create<TState & TActions>(set => ({
  tahun: 2022,
  setTahun: (tahun: number) => set({ tahun })
}));


export default useSosialisasiStore;