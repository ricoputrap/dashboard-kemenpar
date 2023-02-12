import { TStatistikPeserta } from "../../../reusables/organisms/StatistikPeserta/index.types";
import { TStatistikPesertaPertahun } from "../state/index.types";

const getStatistikPesertaSetahun = (
  statistik: TStatistikPesertaPertahun,
  tahun: number
): TStatistikPeserta[] => {
  if (!statistik.hasOwnProperty(tahun))
    return [];

  return statistik[tahun];
}

export default getStatistikPesertaSetahun;