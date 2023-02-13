import { create } from "zustand";
import { TMateriState, TMateriActions, TMateriPertahun } from "./index.types";

const useMateriStore = create<TMateriState & TMateriActions>((set, get) => ({
  materiPertahun: {},
  activeMateri: "pelatihan a",

  setMateriPertahun: (data, tahun) => {
    const materiPertahun: TMateriPertahun = get().materiPertahun;

    // compute value
    const updatedValue: TMateriPertahun = {
      ...materiPertahun,
      [tahun]: data
    }

    set({ materiPertahun: updatedValue })
  },
  setActiveMateri: (activeMateri) => set({ activeMateri })
}));

export default useMateriStore;