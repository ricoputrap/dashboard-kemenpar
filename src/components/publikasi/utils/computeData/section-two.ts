import { TResponseSectionTwo } from "../../../../API/publikasi/types/section-two.types";
import { TProfilMikroInfluencer, TSectionTwo, TStatisticData } from "../../state/index.types";

const computeDataSectionTwo = (data: TResponseSectionTwo): TSectionTwo => {
  const { profile_mikro_influencer, ig_live_ngantri } = data;

  // populate data profil mikro influencer
  const dataProfilMikroInfluencer: TProfilMikroInfluencer[] = [];
  profile_mikro_influencer.data.forEach((item) => {
    const { nama, asal, follower, engagement_rate } = item;
    dataProfilMikroInfluencer.push({
      nama,
      asal,
      follower,
      engagement_rate
    });
  });

  // populate data ig live ngantri
  const igLiveNgantri: TStatisticData[] = [...ig_live_ngantri];

  return {
    profilMikroInfluencer: {
      data: dataProfilMikroInfluencer,
      url: profile_mikro_influencer.url
    },
    igLiveNgantri
  }
}

export default computeDataSectionTwo;