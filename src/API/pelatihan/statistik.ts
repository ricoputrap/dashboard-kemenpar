import useSWR from "swr";
import { fetcher } from "..";
import { TStatistikPeserta } from "../../components/reusables/organisms/StatistikPeserta/index.types";

export type TPesertaTotal = {
  laki: number;
  perempuan: number;
}

export type TStatistikJumlahPeserta = {
  totalAB: TPesertaTotal;
  totalC: TPesertaTotal;
  statistik: TStatistikPeserta[];
}

export type TStatistikResponse = {
  data: TStatistikJumlahPeserta;
}

const statistik = () => {
  const source: string = `data/pelatihan/jumlahPeserta/index.json`;
  const { data, error, isLoading } = useSWR<TStatistikResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default statistik;