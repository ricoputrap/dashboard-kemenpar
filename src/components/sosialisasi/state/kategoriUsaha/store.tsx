import { create } from "zustand";
import { TKategoriUsahaState, TKategoriUsahaActions, TKategoriUsahaPerlokasi, TKategoriUsahaPertahun } from "./index.types";
import { TKategoriUsaha } from "../../types/kategoriUsaha.types";

const useKategoriUsahaStore = create<TKategoriUsahaState & TKategoriUsahaActions>((set, get) => ({
  dpp: "toba",
  kategoriUsahaPertahun: {},

  setDPP: (dpp: string) => set({ dpp }),

  getKategoriUsahaSetahun: (tahun: number, dpp: string) => {
    const kategoriUsahaPertahun: TKategoriUsahaPertahun = get().kategoriUsahaPertahun;

    if (!kategoriUsahaPertahun.hasOwnProperty(tahun))
      return [];

    const kategoriUsahaSetahun: TKategoriUsahaPerlokasi = kategoriUsahaPertahun[tahun];
    if (!kategoriUsahaSetahun.hasOwnProperty(dpp))
      return [];

    return kategoriUsahaSetahun[dpp];
  },
  
  setKategoriUsahaPertahun: (data: TKategoriUsaha[], tahun: number, dpp: string) => {
    const kategoriUsahaPertahun: TKategoriUsahaPertahun = get().kategoriUsahaPertahun;;
    const kategoriUsahaSetahunPerlokasi: TKategoriUsahaPerlokasi = kategoriUsahaPertahun[tahun];
    let updatedKategoriUsahaPertahun: TKategoriUsahaPertahun = { ...kategoriUsahaPertahun };

    if (kategoriUsahaSetahunPerlokasi) {
      updatedKategoriUsahaPertahun[tahun][dpp] = data;
    }
    else {
      updatedKategoriUsahaPertahun[tahun] = {
        [dpp]: data
      }
    }

    // update value
    set({ kategoriUsahaPertahun: updatedKategoriUsahaPertahun })
  }
}));

export default useKategoriUsahaStore;