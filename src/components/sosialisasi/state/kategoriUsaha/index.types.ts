import { TKategoriUsaha } from "../../types/kategoriUsaha.types";

export type TKategoriUsahaPerlokasi = {
  [dpp: string]: TKategoriUsaha[];
}

export type TKategoriUsahaPertahun = {
  [tahun: number]: TKategoriUsahaPerlokasi;
}

export type TKategoriUsahaState = {
  dpp: string;
  kategoriUsahaPertahun: TKategoriUsahaPertahun;
}

export type TKategoriUsahaActions = {
  setDPP: (dpp: string) => void;
  getKategoriUsahaSetahun: (tahun: number, dpp: string) => TKategoriUsaha[];
  setKategoriUsahaPertahun: (data: TKategoriUsaha[], tahun: number, dpp: string) => void;
}