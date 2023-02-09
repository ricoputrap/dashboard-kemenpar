import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPeserta } from "../components/sosialisasi/types/statistik.types";
import kategoriUsaha from "./sosialisasi/kategoriUsaha";
import nilai from "./sosialisasi/nilai";
import usiaPendidikan from "./sosialisasi/usiaPendidikan";

export type TStatistikPesertaPertahun = {
  tahun: number;
  statistik: TStatistikPeserta[];
}

export type TStatistikResponse = {
  data: TStatistikPesertaPertahun;
}

const statistik = (tahun: number) => {
  const source: string = `sosialisasi/jumlahPeserta/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TStatistikResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default {
  statistik,
  kategoriUsaha,
  nilai,
  usiaPendidikan
}