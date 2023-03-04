import { TStatistikPeserta } from "../../../reusables/organisms/StatistikPeserta/index.types";

export type TStatistikTotal = {
  totalPeserta: number;
  totalLaki: number;
  totalPerempuan: number;
}
 
export type TStatistikState = {
  statistikTotalAB: TStatistikTotal;
  statistikTotalC: TStatistikTotal;
  statistikPeserta: TStatistikPeserta[];
}

export type TStatistikActions = {
  setStatistikTotalAB: (statistikTotalAB: TStatistikTotal) => void;
  setStatistikTotalC: (statistikTotalC: TStatistikTotal) => void;
  setStatistikPeserta: (statistikPeserta: TStatistikPeserta[]) => void;
}