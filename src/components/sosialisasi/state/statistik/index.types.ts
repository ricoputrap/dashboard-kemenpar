import { TStatistikPeserta, TStatistikTotal } from "../../types/statistik.types"

export type TStatistikPesertaPertahun = {
  [tahun: number]: TStatistikPeserta[];
}

export type TStatistikState = {
  statistikPesertaPertahun: TStatistikPesertaPertahun;
  statistikTotal: TStatistikTotal;
}

export type TStatistikActions = {
  setStatistikPesertaPertahun: (data: TStatistikPeserta[], tahun: number) => void;
  setStatistikTotal: (data: TStatistikTotal) => void;
}