import { TBarData } from "../../reusables/organisms/BarChart/index.types";

export type TStatisticData = {
  id: string;
  follower: string;
  jumlah_konten: string;
  reach: string;
  engagement: string;
  url: string;
}

export type TListData = {
  label: string;
  value: number;
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

export type TProfilMikroInfluencer = {
  nama: string;
  asal: string;
  follower: string;
  engagement_rate: string;
}

export type TSectionTwo = {
  profilMikroInfluencer: {
    data: TProfilMikroInfluencer[];
    url: string;
  },
  igLiveNgantri: {
    panji: TStatisticData;
    grithe: TStatisticData;
  }
}

export type TSectionThree = {
  podcastWonderfulIndonesia: TStatisticData[];
  userGeneratedContent: TStatisticData[];
}

export type TMediaOnline = {
  list: TListData[];
  jangkauanMedia: {
    labels: string[];
    dataset: TBarData;
    url: string;
  }
}

export type TState = {
  tahun: number;
  mediaSosial: {
    [tahun: number]: TMediaSosial;
  }
  sectionTwo: {
    [tahun: number]: TSectionTwo;
  },
  sectionThree: {
    [tahun: number]: TSectionThree;
  },
  mediaOnline: {
    [tahun: number]: TMediaOnline;
  }
}

export type TActions = {
  setTahun: (tahun: number) => void;
  setDataMediaSosial: (data: TMediaSosial, tahun: number) => void;
  setDataSectionTwo: (data: TSectionTwo, tahun: number) => void;
  setDataSectionThree: (data: TSectionThree, tahun: number) => void;
  setDataMediaOnline: (data: TMediaOnline) => void;
}