import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPendampingan } from "../components/pendampingan/types/statistik.types";

export type TStatistikData = {
  totalDesa: number;
  statistik: TStatistikPendampingan[];
}
export type TLaporanData = {
  dpp: string;
  data: TPendampinganDesa[];
}

type TStatistikResponse = {
  data: TStatistikData;
}
type TLaporanResponse = {
  data: TLaporanData;
}

export const pendampinganStatistik = () => {
  const { data, error, isLoading } = useSWR<TStatistikResponse>("pendampingan/statistik.json", fetcher);
  return { data, error, isLoading }
}

export const pendampinganLaporan = (dpp: string) => {
  const { data, error, isLoading } = useSWR<TLaporanResponse>("pendampingan/laporan.json", fetcher);
  return { data, error, isLoading }
}