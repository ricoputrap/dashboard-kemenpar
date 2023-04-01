import { create } from "zustand";
import { THomeActions, THomeState } from "./index.types";

const useHomeStore = create<THomeState & THomeActions>((set) => ({
  sosialisasi: {
    title: "sosialisasi",
    stats: []
  },
  pelatihan: {
    title: "pelatihan",
    stats: []
  },
  pendampingan: {
    title: "pendampingan",
    stats: []
  },
  map: [],

  setHomeData: (data) => {
    set({
      sosialisasi: data.sosialisasi,
      pelatihan: data.pelatihan,
      pendampingan: data.pendampingan,
      map: data.map,
    });
  }
}));

export default useHomeStore;