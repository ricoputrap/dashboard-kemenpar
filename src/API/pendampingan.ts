import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPendampingan } from "../components/pendampingan/types/statistik.types";
import { TPendampinganDesaPerDPP } from "../components/pendampingan/types/laporan.types";

export type TStatistikData = {
  totalDesa: number;
  statistik: TStatistikPendampingan[];
}

type TStatistikResponse = {
  data: TStatistikData;
}
type TLaporanResponse = {
  data: TPendampinganDesaPerDPP;
}

export const pendampinganStatistik = () => {
  const { data, error, isLoading } = useSWR<TStatistikResponse>("pendampingan/statistik.json", fetcher);
  return { data, error, isLoading }
}

export const pendampinganLaporan = (dpp: string) => {
  const { data, error, isLoading } = useSWR<TLaporanResponse>("pendampingan/laporan.json", fetcher);
  return { data, error, isLoading }
}