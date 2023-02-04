import { TKategoriUsaha } from "../../types/kategoriUsaha.types";

export type TKategoriUsahaPertahun = {
  [tahun: number]: TKategoriUsaha[];
}

export type TKategoriUsahaState = {
  tahun: number;
  kategoriUsahaPertahun: TKategoriUsahaPertahun;
}

export type TKategoriUsahaActions = {
  setTahun: (tahun: number) => void;
  setKategoriUsahaPertahun: (data: TKategoriUsaha[], tahun: number) => void;
}