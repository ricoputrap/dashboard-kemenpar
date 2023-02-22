import useSWR from "swr";
import { TStatistikPeserta } from "../../components/reusables/organisms/StatistikPeserta/index.types";
import { fetcher } from "..";

export type TStatistikPesertaSetahun = {
  tahun: number;
  statistik: TStatistikPeserta[];
}

export type TStatistikResponse = {
  data: TStatistikPesertaSetahun;
}

const statistik = (tahun: number) => {
  const source: string = `data/pelatihan/jumlahPeserta/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TStatistikResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default statistik;