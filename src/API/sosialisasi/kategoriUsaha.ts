import useSWR from "swr";
import { fetcher } from "..";
import { TKategoriUsaha } from "../../components/sosialisasi/types/kategoriUsaha.types";

export type TKategoriUsahaSetahun = {
  dpp: string;
  data: TKategoriUsaha[];
}

export type TKategoriUsahaResponse = {
  data: TKategoriUsahaSetahun;
}

const kategoriUsaha = (dpp: string) => {
  const lokasi: string = dpp == "labuan bajo" ? "labuan_bajo" : dpp;

  const source: string = `data/sosialisasi/kategoriUsaha/${lokasi}.json`;
  const { data, error, isLoading } = useSWR<TKategoriUsahaResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default kategoriUsaha;