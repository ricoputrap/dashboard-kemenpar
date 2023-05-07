import { TResponseMediaSosial } from "../../../API/publikasi";
import { TBarData } from "../../reusables/organisms/BarChart/index.types";
import { TChartInfluencerVisit, TMediaSosial } from "../state/index.types";
import { COLORS_INFLUENCER } from "./constants";

export const computeMediaSosial = (data: TResponseMediaSosial): TMediaSosial => {
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
  const reach: number[] = [];
  const engagement: number[] = [];

  data.chart.data.forEach(item => {
    labels.push(item.dpp);
    follower.push(item.follower);
    reach.push(item.reach);
    engagement.push(item.engagement);
  });

  // follower
  datasets.push({
    label: "Follower",
    data: follower,
    backgroundColor: COLORS_INFLUENCER[0]
  });

  // reach
  datasets.push({
    label: "Reach",
    data: reach,
    backgroundColor: COLORS_INFLUENCER[1]
  });
  
  // engagement
  datasets.push({
    label: "Engagement",
    data: engagement,
    backgroundColor: COLORS_INFLUENCER[2]
  });

  // update data influencer
  influencer.labels = labels;
  influencer.datasets = datasets;

  return { kemenpar, kampanye, pesona, influencer };
}