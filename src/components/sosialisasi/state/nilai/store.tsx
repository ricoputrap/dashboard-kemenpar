import { create } from "zustand";
import { TNilaiState, TNilaiActions, TNilaiPertahun } from "./index.types";
import { TNilai } from "../../types/nilai.types";

const useNilaiStore = create<TNilaiState & TNilaiActions>((set, get) => ({
  tahun: 0,
  nilaiPreTestPertahun: {},
  nilaiPostTestPertahun: {},

  setTahun: (tahun: number) => set({ tahun }),

  setNilaiPreTestPertahun: (data: TNilai[], tahun: number) => {
    const nilaiPreTestPertahun: TNilaiPertahun = get().nilaiPreTestPertahun;

    // compute value
    const updatedValue: TNilaiPertahun = {
      ...nilaiPreTestPertahun,
      [tahun]: data
    }

    // update value
    set({
      nilaiPreTestPertahun: updatedValue
    })
  },

  setNilaiPostTestPertahun: (data: TNilai[], tahun: number) => {
    const nilaiPostTestPertahun: TNilaiPertahun = get().nilaiPostTestPertahun;

    // compute value
    const updatedValue: TNilaiPertahun = {
      ...nilaiPostTestPertahun,
      [tahun]: data
    }

    // update value
    set({
      nilaiPostTestPertahun: updatedValue
    })
  }
}));

export default useNilaiStore;