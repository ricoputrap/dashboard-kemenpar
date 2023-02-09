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

const nilai = (tahun: number) => {
  const source = `sosialisasi/nilai/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TNilaiResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default nilai;