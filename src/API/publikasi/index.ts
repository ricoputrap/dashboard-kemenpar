import useSWR from "swr";
import { fetcher } from "..";
import { TStatisticData } from "../../components/publikasi/state/index.types";

type TInfluencerRawData = {
  dpp: string;
  follower: number;
  reach: number;
  engagement: number;
}

export type TResponseMediaSosial = {
  statistik: TStatisticData[];
  chart: {
    title: string;
    url: string;
    data: TInfluencerRawData[];
  }
}

export type TResponse = {
  data: {
    tahun: number;
    data: {
      media_sosial: TResponseMediaSosial;
    }
  }
}

const publikasi = (tahun: number) => {
  const source: string = `data/publikasi/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TResponse>(source, fetcher);
  return { data, error, isLoading }
};

export default publikasi;