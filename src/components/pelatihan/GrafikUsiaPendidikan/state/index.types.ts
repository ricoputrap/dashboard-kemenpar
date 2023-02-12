import { create } from "zustand";
import { TUsiaPendidikanState, TUsiaPendidikanActions } from "./store";

const useUsiaPendidikanStore = create<TUsiaPendidikanState & TUsiaPendidikanActions>(set => ({
  lokasi: "toba",
  setLokasi: (lokasi) => set({ lokasi })
}));

export default useUsiaPendidikanStore;