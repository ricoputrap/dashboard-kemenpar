import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPendampingan } from "../components/pendampingan/types/statistik.types";
import { TPendampinganDesa, TPendampinganDesaPerDPP } from "../components/pendampingan/types/laporan.types";
import { getCookie } from "../utils/cookie";

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
  const URL = "https://kemenpar.spero-lab.id/admin/api/pendampingan/dashboard/summary";
  const token = getCookie("token");

  const { data, error, isLoading } = useSWR<TStatistikResponse>(
    [URL, token],
    ([URL, token]) => fetcher(URL, token)
  );

  return { data, error, isLoading }
}

export const pendampinganLaporan = (dpp: string) => {
  const URL = "https://kemenpar.spero-lab.id/admin/api/pendampingan/dashboard/detail?dpp=" + dpp;
  const token = getCookie("token");

  const { data, error, isLoading } = useSWR<TLaporanResponse>(
    [URL, token],
    ([URL, token]) => fetcher(URL, token)
  );
  
  return { data, error, isLoading }
}