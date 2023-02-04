import { create } from "zustand";
import { TUsiaState, TUsiaActions, TUsia, TUsiaPertahun, TUsiaPerlokasi } from "./index.types";

const useUsiaStore = create<TUsiaState & TUsiaActions>((set, get) => ({
  usiaPertahun: {},

  getUsiaSetahun: (tahun: number, lokasi: string) => {
    const usiaPertahun: TUsiaPertahun = get().usiaPertahun;

    if (!usiaPertahun.hasOwnProperty(tahun))
      return [];

    const usiaSetahun: TUsiaPerlokasi = usiaPertahun[tahun];
    if (!usiaSetahun.hasOwnProperty(lokasi))
      return [];

    return usiaSetahun[lokasi];
  },

  setUsiaPertahun: (data: TUsia[], tahun: number, lokasi: string) => {
    const usiaPertahun: TUsiaPertahun = get().usiaPertahun;
    const usiaSetahunPerlokasi: TUsiaPerlokasi = usiaPertahun[tahun];
    let updatedUsiaPertahun: TUsiaPertahun = { ...usiaPertahun }
    
    if (usiaSetahunPerlokasi) {
      updatedUsiaPertahun[tahun][lokasi] = data;
    }
    else {
      updatedUsiaPertahun[tahun] = {
        [lokasi]: data
      }
    }

    // update value
    set({
      usiaPertahun: updatedUsiaPertahun
    });
  }
}))

export default useUsiaStore;