import { create } from "zustand";

import { TState, TActions, TMediaSosial, TSectionTwo } from "./index.types";
import { initialDataMediaSosial, initialDataSectionTwo } from "./initialData";
import initialDataSectionThree from "./initialData/initialDataSectionThree";

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
  sectionThree: {
    2022: initialDataSectionThree,
    2023: initialDataSectionThree
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
  },
  setDataSectionThree: (data, tahun) => {
    set(state => ({
      sectionThree: {
        ...state.sectionThree,
        [tahun]: data
      }
    }));
  },
}));

export default usePublikasiStore;