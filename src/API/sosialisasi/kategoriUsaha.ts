import useSWR from "swr";
import { fetcher } from "..";
import { TKategoriUsaha } from "../../components/sosialisasi/types/kategoriUsaha.types";
import { getCookie } from "../../utils/cookie";

export type TKategoriUsahaSetahun = {
  dpp: string;
  data: TKategoriUsaha[];
}

export type TKategoriUsahaResponse = {
  data: TKategoriUsahaSetahun;
}

const kategoriUsaha = (dpp: string, tahun: number) => {
  const lokasi: string = dpp == "labuan bajo" ? "labuan_bajo" : dpp;

  if (tahun == 2022) {
    const source: string = `data/sosialisasi/kategoriUsaha/${tahun}/${lokasi}.json`;
    const { data, error, isLoading } = useSWR<TKategoriUsahaResponse>(source, fetcher);
    return { data, error, isLoading }
  }
  else if (tahun == 2023) {
    const URL = `https://kampanye-sadarwisata.com/api/sosialisasi/kategori-usaha?dpp=${dpp}&tahun=${tahun}`;
    const token = getCookie("token");
    
    const { data, error, isLoading } = useSWR<TKategoriUsahaResponse>(
      [URL, token],
      ([URL, token]) => fetcher(URL, token)
    );
    return { data, error, isLoading }
  }
  return { data: null, error: null, isLoading: true }
}

export default kategoriUsaha;