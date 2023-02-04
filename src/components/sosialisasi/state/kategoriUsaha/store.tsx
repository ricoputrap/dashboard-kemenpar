import { create } from "zustand";
import { TKategoriUsahaState, TKategoriUsahaActions, TKategoriUsahaPertahun } from "./index.types";
import { TKategoriUsaha } from "../../types/kategoriUsaha.types";

const useKategoriUsahaStore = create<TKategoriUsahaState & TKategoriUsahaActions>((set, get) => ({
  tahun: 0,
  kategoriUsahaPertahun: {},

  setTahun: (tahun: number) => set({
    tahun
  }),

  setKategoriUsahaPertahun: (data: TKategoriUsaha[], tahun: number) => {
    const kategoriUsahaPertahun: TKategoriUsahaPertahun = get().kategoriUsahaPertahun;

    // compute value
    const updatedValue: TKategoriUsahaPertahun = {
      ...kategoriUsahaPertahun,
      [tahun]: data
    }

    // update value
    set({
      kategoriUsahaPertahun: updatedValue
    })
  }
}));

export default useKategoriUsahaStore;