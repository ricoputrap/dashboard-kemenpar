import { TStatistikPeserta } from "../../../reusables/organisms/StatistikPeserta/index.types";
import { TStatistikTotal } from "../state/index.types";

const computeStatistikTotal = (statistik: TStatistikPeserta[]): TStatistikTotal => {
  const initialStatistikTotal: TStatistikTotal = {
    totalPeserta: 0,
    totalLaki: 0,
    totalPerempuan: 0
  }
  
  if (statistik.length == 0)
    return initialStatistikTotal;

  return statistik.reduce(
    (total: TStatistikTotal, stat: TStatistikPeserta) => {
      const jmlLaki: number = stat.laki;
      const jmlPerempuan: number = stat.perempuan;
      const jmlTotal: number = jmlLaki + jmlPerempuan;

      return {
        totalPeserta: total.totalPeserta + jmlTotal,
        totalLaki: total.totalLaki + jmlLaki,
        totalPerempuan: total.totalPerempuan + jmlPerempuan
      }
    },
    initialStatistikTotal
  );
}

export default computeStatistikTotal;