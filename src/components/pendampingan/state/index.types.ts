import { TPendampinganDesa, TPendampinganDesaPerDPP } from "../types/laporan.types";
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
  dataPendampinganDesaPerDPP: TPendampinganDesaPerDPP[],
  setActiveDPP: (dpp: string) => void,
  getDataPendampinganByDPP: (dpp: string) => TPendampinganDesa[],
  setDataPendampinganPerDPP: (
    dpp: string,
    data: TPendampinganDesa[]
  ) => void
}