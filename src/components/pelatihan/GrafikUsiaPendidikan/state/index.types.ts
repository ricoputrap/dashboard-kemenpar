import { TUsia, TUsiaPertahun } from "./usia.types";

export type TUsiaPendidikanState = {
  lokasi: string;
  usiaPertahun: TUsiaPertahun;
}

export type TUsiaPendidikanActions = {
  setLokasi: (lokasi: string) => void;
  setUsiaPertahun: (data: TUsia[], tahun: number, lokasi: string) => void;
}