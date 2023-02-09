import useSWR from "swr";
import { fetcher } from "..";
import { TKategoriUsaha } from "../../components/sosialisasi/types/kategoriUsaha.types";

export type TKategoriUsahaSetahun = {
  tahun: number;
  data: TKategoriUsaha[];
}

export type TKategoriUsahaResponse = {
  data: TKategoriUsahaSetahun;
}

const kategoriUsaha = (tahun: number) => {
  const source: string = `sosialisasi/kategoriUsaha/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TKategoriUsahaResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default kategoriUsaha;