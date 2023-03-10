import { TStatistikTotal } from "../../types/statistik.types"
import { TStatistikPeserta } from "../../../reusables/organisms/StatistikPeserta/index.types";

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