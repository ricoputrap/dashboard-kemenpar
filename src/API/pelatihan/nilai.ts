import useSWR from "swr";
import { fetcher } from "..";
import { TJenisPelatihan } from "../../components/pelatihan/GrafikNilai/state/index.types";

export type TNilaiPerlokasi = {
  lokasi: string;
  "pre-test": number;
  "post-test": number;
}

export type TNilaiSetahun = {
  tahun: number;
  pelatihan: TJenisPelatihan;
  data: TNilaiPerlokasi[];
}

export type TNilaiResponse = {
  data: TNilaiSetahun;
}

const nilai = (tahun: number, jenisPelatihan: TJenisPelatihan) => {
  const source: string = `pelatihan/nilai/${tahun}/${jenisPelatihan}.json`;
  const { data, error, isLoading } = useSWR<TNilaiResponse>(source, fetcher);
  return { data, error, isLoading };
}

export default nilai;