import { create } from "zustand";
import { TStatistikActions, TStatistikPesertaPertahun, TStatistikState } from "./index.types";

const useStatistikStore = create<TStatistikState & TStatistikActions>((set, get) => ({
  statistikPesertaPertahun: {},

  setStatistikPesertaPertahun: (data, tahun) => {
    const statistikPesertaPertahun: TStatistikPesertaPertahun = get().statistikPesertaPertahun;

    // compute value
    const updatedValue: TStatistikPesertaPertahun = {
      ...statistikPesertaPertahun,
      [tahun]: data
    }

    // update value
    set({ statistikPesertaPertahun: updatedValue })
  }
}));

export default useStatistikStore;