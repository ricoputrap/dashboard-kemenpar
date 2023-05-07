import { TBarData } from "../../reusables/organisms/BarChart/index.types";

export type TStatisticData = {
  id: string;
  follower: string;
  jumlah_konten: string;
  reach: string;
  engagement: string;
  url: string;
}

export type TChartInfluencerVisit = {
  labels: string[];
  datasets: TBarData[];
  url: string;
}

export type TMediaSosial = {
  kemenpar: TStatisticData;
  kampanye: TStatisticData;
  pesona: TStatisticData;
  influencer: TChartInfluencerVisit;
}

export type TState = {
  tahun: number;
  mediaSosial: {
    [tahun: number]: TMediaSosial;
  }
}

export type TActions = {
  setTahun: (tahun: number) => void;
  setDataMediaSosial: (data: TMediaSosial, tahun: number) => void;
}