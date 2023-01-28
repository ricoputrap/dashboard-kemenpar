import useSWR from "swr";
import { fetcher } from ".";
import { TStatistikPendampingan } from "../components/pendampingan/types/statistik.types";

export type TStatistikData = {
  totalDesa: number;
  statistik: TStatistikPendampingan[];
}

type TStatistikResponse = {
  data: TStatistikData;
}

const pendampinganStatistik = () => {
  const { data, error, isLoading } = useSWR<TStatistikResponse>("pendampingan/statistik.json", fetcher);
  return { data, error, isLoading }
}

export default pendampinganStatistik;