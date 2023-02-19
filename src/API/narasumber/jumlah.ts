import useSWR from "swr";
import { fetcher } from "..";
import { TJumlahTotal } from "../../components/narasumber/state/index.types";

export type TJumlahData = {
  total: TJumlahTotal;
}

export type TJumlahResponse = {
  data: TJumlahData;
}

const jumlah = () => {
  const source: string = "narasumber/jumlah.json";
  const { data, error, isLoading } = useSWR<TJumlahResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default jumlah;