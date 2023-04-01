import useSWR from "swr";
import { fetcher } from "..";
import { TStatistikPeserta } from "../../components/reusables/organisms/StatistikPeserta/index.types";

export type TPesertaTotal = {
  laki: number;
  perempuan: number;
}

export type TStatistikJenisKelamin = {
  totalAB: TPesertaTotal;
  totalC: TPesertaTotal;
}

export type TStatistikJumlahPeserta = {
  statistik: TStatistikPeserta[];
}

export type TStatistikJenisKelaminResponse = {
  data: TStatistikJenisKelamin;
}

export type TStatistikJumlahPesertaResponse = {
  data: TStatistikJumlahPeserta;
}

export const statistik = (jenisPelatihan: string) => {
  const source: string = `data/pelatihan/jumlahPeserta/${jenisPelatihan}.json`;
  const { data, error, isLoading } = useSWR<TStatistikJumlahPesertaResponse>(source, fetcher);
  return { data, error, isLoading }
}

export const statistikJenisKelamin = () => {
  const source: string = `data/pelatihan/jumlahPeserta/jenisKelamin.json`;
  const { data, error, isLoading } = useSWR<TStatistikJenisKelaminResponse>(source, fetcher);
  return { data, error, isLoading }
}