import { TStatistikPeserta } from "../../../reusables/organisms/StatistikPeserta/index.types";

export type TStatistikPesertaPertahun = {
  [tahun: number]: TStatistikPeserta[];
}

export type TStatistikState = {
  statistikPesertaPertahun: TStatistikPesertaPertahun;
}

export type TStatistikActions = {
  setStatistikPesertaPertahun: (data: TStatistikPeserta[], tahun: number) => void;
}