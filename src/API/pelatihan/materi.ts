import useSWR from "swr";
import { fetcher } from "..";
import { TMateri } from "../../components/pelatihan/MateriPelatihan/state/index.types";

export type TMateriSetahun = {
  tahun: number;
  pelatihan: string;
  materi: TMateri[];
}

export type TMateriResponse = {
  data: TMateriSetahun;
}

const materi = (tahun: number, jenisMateri: string) => {
  const source: string = `pelatihan/materi/${tahun}/${jenisMateri}.json`;
  const { data, error, isLoading } = useSWR<TMateriResponse>(source, fetcher);
  return { data, error, isLoading };
}

export default materi;