import { TPendidikan, TPendidikanPertahun } from "./pendidikan.types";
import { TUsia, TUsiaPertahun } from "./usia.types";

export type TUsiaPendidikanState = {
  lokasi: string;
  usiaPertahun: TUsiaPertahun;
  pendidikanPertahun: TPendidikanPertahun;
}

export type TUsiaPendidikanActions = {
  setLokasi: (lokasi: string) => void;
  setUsiaPertahun: (data: TUsia[], tahun: number, lokasi: string) => void;
  setPendidikanPertahun: (data: TPendidikan[], tahun: number, lokasi: string) => void;
}