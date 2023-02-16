import { create } from "zustand";
import { TDataTableState, TDataTableActions } from "./index.types";

const useDataTableStore = create<TDataTableState & TDataTableActions>(set => ({
  searchValue: "",
  setSearchValue: value => {
    set({ searchValue: value })
  },
}));

export default useDataTableStore;