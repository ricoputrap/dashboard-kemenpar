import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPendampingan } from "../components/pendampingan/types/statistik.types";
import { TPendampinganDesa, TPendampinganDesaPerDPP } from "../components/pendampingan/types/laporan.types";

export type TStatistikData = {
  totalDesa: number;
  statistik: TStatistikPendampingan[];
}

type TStatistikResponse = {
  data: TStatistikData;
}

export type TResponsePendampinganDesaPerDPP = {
  dpp: string;
  data: TPendampinganDesa[];
}

type TLaporanResponse = {
  data: TResponsePendampinganDesaPerDPP;
}

export const pendampinganStatistik = () => {
  const { data, error, isLoading } = useSWR<TStatistikResponse>("pendampingan/statistik.json", fetcher);
  return { data, error, isLoading }
}

export const pendampinganLaporan = (dpp: string) => {
  const URL = "https://testingkemenpar.spero-lab.id/admin/api/pendampingan/dashboard/detail?dpp=" + dpp;
  // const token = "b6e276f8abb9542ce1a8c43615f94c8dabfb6d58";
  // const { data, error, isLoading } = useSWR<TLaporanResponse>(
  //   [URL, token],
  //   ([URL, token]) => fetcher(URL, token)
  // );
  const { data, error, isLoading } = useSWR<TLaporanResponse>("pendampingan/laporan.json", fetcher);
  return { data, error, isLoading }
}