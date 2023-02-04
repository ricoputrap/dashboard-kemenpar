import useSWR from "swr";
import { fetcher } from "..";

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

const nilai = () => {
  const { data, error, isLoading } = useSWR<TNilaiResponse>("sosialisasi/nilai.json", fetcher);
  return { data, error, isLoading }
}

export default nilai;