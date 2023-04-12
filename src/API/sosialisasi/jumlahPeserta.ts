import useSWR from "swr";
import { fetcher } from "..";
import { TStatistikPeserta } from "../../components/reusables/organisms/StatistikPeserta/index.types";
import { getCookie } from "../../utils/cookie";

export type TStatistikPesertaPertahun = {
  tahun: number;
  statistik: TStatistikPeserta[];
}

export type TStatistikResponse = {
  data: TStatistikPesertaPertahun;
}

const statistik = (tahun: number) => {
  if (tahun == 2022) {
    const source: string = `data/sosialisasi/jumlahPeserta/${tahun}.json`;
    const { data, error, isLoading } = useSWR<TStatistikResponse>(source, fetcher);
    return { data, error, isLoading }
  }
  else if (tahun == 2023) {
    const URL = "https://kampanye-sadarwisata.com/api/sosialisasi/jumlah-peserta?tahun=2023";
    const token = getCookie("token");

    const { data, error, isLoading } = useSWR<TStatistikResponse>(
      [URL, token],
      ([URL, token]) => fetcher(URL, token)
    );

    return { data, error, isLoading }
  }
  return { data: null, error: null, isLoading: true }
}

export default statistik;