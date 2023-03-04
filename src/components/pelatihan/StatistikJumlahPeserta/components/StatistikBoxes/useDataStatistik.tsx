import { TStatistikPeserta } from "../../../../reusables/organisms/StatistikPeserta/index.types";
import useStatistikStore from "../../state/store";

const useDataStatistik = (): TStatistikPeserta[] => {
  const statistikPeserta = useStatistikStore(state => state.statistikPeserta);
  return statistikPeserta;
}

export default useDataStatistik;