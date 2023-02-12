import { create } from "zustand";
import { TUsiaPendidikanState, TUsiaPendidikanActions } from "./index.types";
import { TUsiaPerlokasi, TUsiaPertahun } from "./usia.types";
import { TPendidikanPertahun } from "./pendidikan.types";

const useUsiaPendidikanStore = create<TUsiaPendidikanState & TUsiaPendidikanActions>((set, get) => ({
  lokasi: "toba",
  usiaPertahun: {},
  pendidikanPertahun: {},

  setLokasi: (lokasi) => set({ lokasi }),
  setUsiaPertahun: (data, tahun, lokasi) => {
    const usiaPertahun: TUsiaPertahun = get().usiaPertahun;
    const usiaSetahunPerlokasi: TUsiaPerlokasi = usiaPertahun[tahun];
    let updatedUsiaPertahun: TUsiaPertahun = { ...usiaPertahun };

    if (usiaSetahunPerlokasi) {
      updatedUsiaPertahun[tahun][lokasi] = data;
    }
    else {
      updatedUsiaPertahun[tahun] = {
        [lokasi]: data
      }
    }

    set({ usiaPertahun: updatedUsiaPertahun })
  },

  setPendidikanPertahun: (data, tahun, lokasi) => {
    const pendidikanPertahun = get().pendidikanPertahun;
    const pendidikanSetahunPerlokasi = pendidikanPertahun[tahun];
    let updatedPendidikanPertahun: TPendidikanPertahun = { ...pendidikanPertahun };

    if (pendidikanSetahunPerlokasi) {
      updatedPendidikanPertahun[tahun][lokasi] = data;
    }
    else {
      updatedPendidikanPertahun[tahun] = {
        [lokasi]: data
      }
    }

    set({ pendidikanPertahun: updatedPendidikanPertahun })
  }
}));

export default useUsiaPendidikanStore;