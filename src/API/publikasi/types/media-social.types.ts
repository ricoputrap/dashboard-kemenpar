import { TStatisticData } from "../../../components/publikasi/state/index.types";

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