import { create } from "zustand";

import { TState, TActions, TMediaSosial, TSectionTwo } from "./index.types";
import { initialDataMediaSosial, initialDataSectionTwo } from "./initialData";

const usePublikasiStore = create<TState & TActions>(set => ({
  tahun: 2022,
  mediaSosial: {
    2022: initialDataMediaSosial,
    2023: initialDataMediaSosial,
  },
  sectionTwo: {
    2022: initialDataSectionTwo,
    2023: initialDataSectionTwo
  },

  setTahun: (tahun: number) => set({ tahun }),
  setDataMediaSosial: (data: TMediaSosial, tahun: number) => {
    set(state => ({
      mediaSosial: {
        ...state.mediaSosial,
        [tahun]: data
      }
    }))
  },
  setDataSectionTwo: (data: TSectionTwo, tahun: number) => {
    set(state => ({
      sectionTwo: {
        ...state.sectionTwo,
        [tahun]: data
      }
    }));
  }
}));

export default usePublikasiStore;