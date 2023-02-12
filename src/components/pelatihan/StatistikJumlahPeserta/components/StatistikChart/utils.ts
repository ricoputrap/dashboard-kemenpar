import { TGenderData } from "../../../../reusables/organisms/DoughnutChartPeserta/types/legends.types"
import { TStatistikTotal } from "../../state/index.types";

export interface IStatistikChartData {
  menData: TGenderData;
  womenData: TGenderData;
}

export const computeData = (
  statistikTotal: TStatistikTotal
): IStatistikChartData => {
  const totalLaki = statistikTotal.totalLaki;
  const totalPerempuan = statistikTotal.totalPerempuan;

  const percentLaki = totalLaki > 0
    ? Math.ceil((totalLaki * 100) / (totalLaki + totalPerempuan))
    : 0;
  const percentPerempuan = totalPerempuan > 0
    ? Math.floor((totalPerempuan * 100) / (totalLaki + totalPerempuan))
    : 0;

  const menData: TGenderData = {
    value: totalLaki,
    percent: percentLaki,
    label: "laki-laki",
    color: "#00FFFF"
  }

  const womenData: TGenderData = {
    value: totalPerempuan,
    percent: percentPerempuan,
    label: "perempuan",
    color: "#FF1F00"
  }

  return { menData, womenData }
}