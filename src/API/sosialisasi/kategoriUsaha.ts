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

const kategoriUsaha = () => {
  const { data, error, isLoading } = useSWR<TKategoriUsahaResponse>("sosialisasi/kategori-usaha.json", fetcher);
  return { data, error, isLoading }
}

export default kategoriUsaha;