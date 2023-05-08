import { TChartInfluencerVisit, TProfilMikroInfluencer, TSectionTwo, TStatisticData } from "./index.types";

export const kemenpar: TStatisticData = {
  id: "@kemenparekraf.ri",
  follower: "0",
  jumlah_konten: "0",
  reach: "0",
  engagement: "0%",
  url: "#"
}
export const kampanye: TStatisticData = {
  id: "@kemenparekraf.ri",
  follower: "0",
  jumlah_konten: "0",
  reach: "0",
  engagement: "0%",
  url: "#"
}
export const pesona: TStatisticData = {
  id: "@kemenparekraf.ri",
  follower: "0",
  jumlah_konten: "0",
  reach: "0",
  engagement: "0%",
  url: "#"
}
export const influencer: TChartInfluencerVisit = {
  labels: [],
  datasets: [],
  url: "#"
}

export const initialDataMediaSosial = { kemenpar, kampanye, pesona, influencer };

export const dataProfilMikroInfluencer: TProfilMikroInfluencer[] = [];
export const panji: TStatisticData = {
  id: "PANJI PETUALANG",
  follower: "0",
  jumlah_konten: "0",
  reach: "0",
  engagement: "0%",
  url: "#"
}
export const grithe: TStatisticData = {
  id: "GRITHE AGATHA",
  follower: "0",
  jumlah_konten: "0",
  reach: "0",
  engagement: "0%",
  url: "#"
}
export const initialDataSectionTwo: TSectionTwo = {
  profilMikroInfluencer: {
    data: dataProfilMikroInfluencer,
    url: "#"
  },
  igLiveNgantri: { panji, grithe }
}