import useSWR from "swr";
import { fetcher } from "..";
import { getCookie } from "../../utils/cookie";

type TNilaiPerlokasi = {
  lokasi: string;
  "pre-test": number;
  "post-test": number;
}

export type TNilaiSetahun = {
  tahun: number;
  data: TNilaiPerlokasi[];
}

export type TNilaiResponse = {
  data: TNilaiSetahun;
}

const nilai = (tahun: number) => {
  if (tahun == 2022) {
    const source = `data/sosialisasi/nilai/${tahun}.json`;
    const { data, error, isLoading } = useSWR<TNilaiResponse>(source, fetcher);
    return { data, error, isLoading }
  }
  else if (tahun == 2023) {
    const URL = "https://kampanye-sadarwisata.com/api/sosialisasi/nilai?tahun=2023";
    const token = getCookie("token");

    const { data, error, isLoading } = useSWR<TNilaiResponse>(
      [URL, token],
      ([URL, token]) => fetcher(URL, token)
    );

    return { data, error, isLoading }
  }
  return { data: null, error: null, isLoading: true };
}

export default nilai;