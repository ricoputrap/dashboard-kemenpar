export type TMikroInfluencerRawData = {
  nama: string;
  asal: string;
  follower: string;
  engagement_rate: string;
}
export type TMikroInfluencerFullData = {
  id: string;
  follower: string;
  jumlah_konten: string;
  reach: string;
  engagement: string;
  url: string;
}

export type TResponseSectionTwo = {
  profile_mikro_influencer: {
    url: string;
    data: TMikroInfluencerRawData[];
  },
  ig_live_ngantri: TMikroInfluencerFullData[];
}