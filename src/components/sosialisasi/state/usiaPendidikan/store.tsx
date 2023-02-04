import { create } from "zustand";
import { TUsiaPendidikanActions, TUsiaPendidikanState } from "./index.types";

const useUsiaPendidikanStore = create<TUsiaPendidikanState & TUsiaPendidikanActions>(set => ({
  tahun: 2022,
  lokasi: "toba",

  setTahun: (tahun: number) => set({ tahun }),
  setLokasi: (lokasi: string) => set({ lokasi })
}))

export default useUsiaPendidikanStore;