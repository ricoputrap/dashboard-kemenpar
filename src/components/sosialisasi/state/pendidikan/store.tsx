import { create } from "zustand";
import { TPendidikan, TPendidikanActions, TPendidikanPerlokasi, TPendidikanPertahun, TPendidikanState } from "./index.types";

const usePendidikanStore = create<TPendidikanState & TPendidikanActions>((set, get) => ({
  pendidikanPertahun: {},

  getPendidikanSetahun: (tahun: number, lokasi: string) => {
    const pendidikanPertahun: TPendidikanPertahun = get().pendidikanPertahun;
    if (!pendidikanPertahun.hasOwnProperty(tahun))
      return [];

    const pendidikanSetahun: TPendidikanPerlokasi = pendidikanPertahun[tahun];
    if (!pendidikanSetahun.hasOwnProperty(lokasi))
      return [];
  
    return pendidikanSetahun[lokasi];
  },

  setPendidikan: (data: TPendidikan[], tahun: number, lokasi: string) => {
    const pendidikanPertahun: TPendidikanPertahun = get().pendidikanPertahun;

    const pendidikanSetahunPerlokasi: TPendidikanPerlokasi = pendidikanPertahun[tahun];
    let updatedPendidikanPertahun: TPendidikanPertahun = { ...pendidikanPertahun };

    if (pendidikanSetahunPerlokasi) {
      updatedPendidikanPertahun[tahun][lokasi] = data;
    }
    else {
      updatedPendidikanPertahun[tahun] = {
        [lokasi]: data
      }
    }

    set({
      pendidikanPertahun: updatedPendidikanPertahun
    });
  }
}));

export default usePendidikanStore;