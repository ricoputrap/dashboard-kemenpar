import { create } from "zustand";
import { TMateriState, TMateriActions, TMateriPertahun, TMateriPerJenis } from "./index.types";

const useMateriStore = create<TMateriState & TMateriActions>((set, get) => ({
  jenisMateri: "pelatihan_a_&_b",
  materiPertahun: {},

  setJenisMateri: (jenisMateri) => {set({ jenisMateri })},
  setMateriPertahun: (data, tahun, jenisMateri) => {
    const materiPertahun: TMateriPertahun = get().materiPertahun;
    const materiSetahunPerJenis: TMateriPerJenis = materiPertahun[tahun];
    let updatedMateriPertahun: TMateriPertahun = { ...materiPertahun };

    if (materiSetahunPerJenis) {
      updatedMateriPertahun[tahun][jenisMateri] = data;
    }
    else {
      updatedMateriPertahun[tahun] = {
        [jenisMateri]: data
      }
    }

    set({ materiPertahun: updatedMateriPertahun })
  },
  
}));

export default useMateriStore;