import { TStatistikPendampingan } from "../types/statistik.types"

export type TDataStatistikTotal = {
  totalDesa: number;
  totalBelum: number;
  totalSudah: number;
}

type FSetDataStatistik = (data: TStatistikPendampingan[]) => void;
type FSetDataStatistikTotal = (data: TDataStatistikTotal) => void;

export type TPendampinganState = {
  // STATISTIK
  statistikPendampingan: TStatistikPendampingan[],
  statistikTotal: TDataStatistikTotal,
  setDataStatistik: FSetDataStatistik,
  setDataStatistikTotal: FSetDataStatistikTotal,

  // LAPORAN
  activeDPP: string,
  setActiveDPP: (dpp: string) => void
}