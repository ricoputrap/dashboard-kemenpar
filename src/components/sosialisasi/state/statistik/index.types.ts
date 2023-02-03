import { TStatistikPeserta, TStatistikTotal } from "../../types/statistik.types"

export type TStatistikPesertaPertahun = {
  [tahun: number]: TStatistikPeserta[];
}

export type TStatistikState = {
  tahun: number;
  statistikPesertaPertahun: TStatistikPesertaPertahun;
  statistikTotal: TStatistikTotal;
}

export type TStatistikActions = {
  setTahun: (tahun: number) => void;
  setStatistikPesertaPertahun: (data: TStatistikPeserta[], tahun: number) => void;
  setStatistikTotal: (data: TStatistikTotal) => void;
}