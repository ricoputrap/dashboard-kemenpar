import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPeserta } from "../components/sosialisasi/types/statistik.types";
import kategoriUsaha from "./sosialisasi/kategoriUsaha";
import nilai from "./sosialisasi/nilai";

export type TStatistikPesertaPertahun = {
  tahun: number;
  statistik: TStatistikPeserta[];
}

export type TStatistikResponse = {
  data: TStatistikPesertaPertahun;
}

const statistik = () => {
  const { data, error, isLoading } = useSWR<TStatistikResponse>("sosialisasi/statistik.json", fetcher);
  return { data, error, isLoading }
}

export default {
  statistik,
  kategoriUsaha,
  nilai
}