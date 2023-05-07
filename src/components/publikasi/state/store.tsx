import { create } from "zustand";

import { TState, TActions, TMediaSosial } from "./index.types";
import { initialDataMediaSosial } from "./initialData";

const usePublikasiStore = create<TState & TActions>(set => ({
  tahun: 2022,
  mediaSosial: {
    2022: initialDataMediaSosial,
    2023: initialDataMediaSosial,
  },

  setTahun: (tahun: number) => set({ tahun }),
  setDataMediaSosial: (data: TMediaSosial, tahun: number) => {
    set(state => ({
      mediaSosial: {
        ...state.mediaSosial,
        [tahun]: data
      }
    }))
  }
}));

export default usePublikasiStore;