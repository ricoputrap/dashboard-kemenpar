import { TNilai } from "../../types/nilai.types"

export type TNilaiPertahun = {
  [tahun: number]: TNilai[];
}

export type TNilaiState = {
  tahun: number;
  nilaiPreTestPertahun: TNilaiPertahun;
  nilaiPostTestPertahun: TNilaiPertahun;
}

export type TNilaiActions = {
  setTahun: (tahun: number) => void;
  setNilaiPreTestPertahun: (data: TNilai[], tahun: number) => void;
  setNilaiPostTestPertahun: (data: TNilai[], tahun: number) => void;
}