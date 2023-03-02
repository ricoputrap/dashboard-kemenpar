import { create } from "zustand";
import { TKategoriUsahaState, TKategoriUsahaActions, TKategoriUsahaPerlokasi } from "./index.types";
import { TKategoriUsaha } from "../../types/kategoriUsaha.types";

const useKategoriUsahaStore = create<TKategoriUsahaState & TKategoriUsahaActions>((set, get) => ({
  dpp: "toba",
  kategoriUsahaPerlokasi: {},

  setDPP: (dpp: string) => set({ dpp }),

  setKategoriUsahaPerlokasi: (data: TKategoriUsaha[], dpp: string) => {
    const kategoriUsahaPerlokasi: TKategoriUsahaPerlokasi = get().kategoriUsahaPerlokasi;

    // compute value
    const updatedValue: TKategoriUsahaPerlokasi = {
      ...kategoriUsahaPerlokasi,
      [dpp]: data
    }

    // update value
    set({ kategoriUsahaPerlokasi: updatedValue })
  }
}));

export default useKategoriUsahaStore;