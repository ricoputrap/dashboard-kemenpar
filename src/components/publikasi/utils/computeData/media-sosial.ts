import { TResponseMediaSosial } from "../../../../API/publikasi/types/media-social.types";
import { TBarData } from "../../../reusables/organisms/BarChart/index.types";
import { TChartInfluencerVisit, TMediaSosial } from "../../state/index.types";
import { COLORS_INFLUENCER } from "../constants";



const computeMediaSosial = (data: TResponseMediaSosial): TMediaSosial => {
  const [kemenpar, kampanye, pesona] = data.statistik;

  const influencer: TChartInfluencerVisit = {
    labels: [],
    datasets: [],
    url: ""
  }
  influencer.url = data.chart.url;

  const labels: string[] = [];
  const datasets: TBarData[] = [];
  const follower: number[] = [];

  data.chart.data.forEach(item => {
    labels.push(item.dpp.toUpperCase());

    let totalFollower: number = 0;
    if (item.follower.includes("K")) {
      const strTotal = item.follower.slice(0, item.follower.length - 1);
      const KILO = 1_000;
      totalFollower = parseFloat(strTotal) * KILO;
    }
    else if (item.follower.includes("M")) {
      const strTotal = item.follower.slice(0, item.follower.length - 1);
      const MEGA = 1_000_000;
      totalFollower = parseFloat(strTotal) * MEGA;
    }

    follower.push(totalFollower);
  });

  // follower
  datasets.push({
    label: "Follower",
    data: follower,
    backgroundColor: COLORS_INFLUENCER[0]
  });

  // update data influencer
  influencer.labels = labels;
  influencer.datasets = datasets;

  return {
    data: [kemenpar, kampanye, pesona],
    influencer
  };
}

export default computeMediaSosial;