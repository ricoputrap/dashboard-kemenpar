import { useMemo } from "react";
import { TStatistikPeserta } from "../../../../reusables/organisms/StatistikPeserta/index.types";
import useStatistikStore from "../../state/store";
import getStatistikPesertaSetahun from "../../utils/getStatistikPesertaSetahun";

const useDataStatistik = (): TStatistikPeserta[] => {
  const statistikPesertaPertahun = useStatistikStore(state => state.statistikPesertaPertahun);
  const TAHUN: number = 2022;

  const statistikPesertaSetahun = useMemo(
    () => getStatistikPesertaSetahun(statistikPesertaPertahun, TAHUN),
    [statistikPesertaPertahun, TAHUN]
  );

  return statistikPesertaSetahun;
}

export default useDataStatistik;