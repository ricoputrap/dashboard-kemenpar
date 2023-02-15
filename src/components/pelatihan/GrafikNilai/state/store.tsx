import { create } from "zustand";
import { TNilaiState, TNilaiActions, TNilaiPerPelatihan } from "./index.types";

const useNilaiStore = create<TNilaiState & TNilaiActions>((set, get) => ({
  jenisPelatihan: "pelatihan_a_b",
  nilaiPertahun: {},

  setJenisPelatihan: (jenisPelatihan) => set({ jenisPelatihan }),
  setNilaiPertahun: (nilaiPreTest, nilaiPostTest, tahun, jenisPelatihan) => {
    const nilaiPertahun = { ...get().nilaiPertahun };

    if (!nilaiPertahun.hasOwnProperty(tahun)) {
      nilaiPertahun[tahun] = {
        [jenisPelatihan]: {
          preTest: nilaiPreTest,
          postTest: nilaiPostTest
        }
      }
      set({ nilaiPertahun });
      return;
    }

    nilaiPertahun[tahun][jenisPelatihan] = {
      preTest: nilaiPreTest,
      postTest: nilaiPostTest
    }
    set({ nilaiPertahun });
  },
}));

export default useNilaiStore;