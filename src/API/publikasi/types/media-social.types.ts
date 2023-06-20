import { TStatisticData } from "../../../components/publikasi/state/index.types";

type TInfluencerRawData = {
  dpp: string;
  follower: string;
}

export type TResponseMediaSosial = {
  statistik: TStatisticData[];
  chart: {
    title: string;
    url: string;
    data: TInfluencerRawData[];
  }
}