import { create } from "zustand";
import { TState, TActions } from "./index.types";

const useNarasumberStore = create<TState & TActions>(set => ({
  jumlahTotal: {
    totalLaki: 0,
    totalPerempuan: 0
  },
  komposisi: [],
  topList: [],
  searchValue: "",
  tableData: [],

  setJumlahTotal: (totalLaki, totalPerempuan) => set({
    jumlahTotal: { totalLaki, totalPerempuan }
  }),
  setKomposisi: (komposisi) => set({ komposisi }),
  setTopList: (topList) => set({ topList }),
  setSearchValue: (searchValue) => set({ searchValue }),
  setTableData: (tableData) => set({ tableData })
}));

export default useNarasumberStore;