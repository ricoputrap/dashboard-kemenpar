import { TKategoriUsaha } from "../../types/kategoriUsaha.types";

export type TKategoriUsahaPerlokasi = {
  [dpp: string]: TKategoriUsaha[];
}

export type TKategoriUsahaState = {
  dpp: string;
  kategoriUsahaPerlokasi: TKategoriUsahaPerlokasi;
}

export type TKategoriUsahaActions = {
  setDPP: (dpp: string) => void;
  setKategoriUsahaPerlokasi: (data: TKategoriUsaha[], dpp: string) => void;
}