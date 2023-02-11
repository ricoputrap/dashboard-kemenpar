import { useMemo } from "react";
import { TStatistikPeserta } from "../../../../reusables/organisms/StatistikPeserta/index.types";
import useStatistikStore from "../../state/store";

const useDataStatistik = (): TStatistikPeserta[] => {
  const statistikPesertaPertahun = useStatistikStore(state => state.statistikPesertaPertahun);
  const TAHUN: number = 2022;

  const statistikPesertaSetahun: TStatistikPeserta[] = useMemo(() => {
    if (!statistikPesertaPertahun.hasOwnProperty(TAHUN))
      return [];

      return statistikPesertaPertahun[TAHUN];
  }, [statistikPesertaPertahun]);

  return statistikPesertaSetahun;
}

export default useDataStatistik;