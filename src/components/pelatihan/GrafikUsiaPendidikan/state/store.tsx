import { create } from "zustand";
import { TUsiaPendidikanState, TUsiaPendidikanActions } from "./index.types";
import { TUsiaPerlokasi, TUsiaPertahun } from "./usia.types";

const useUsiaPendidikanStore = create<TUsiaPendidikanState & TUsiaPendidikanActions>((set, get) => ({
  lokasi: "toba",
  usiaPertahun: {},

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
  }
}));

export default useUsiaPendidikanStore;