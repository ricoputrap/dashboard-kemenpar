import { TStatistikPeserta } from "../../../../reusables/organisms/StatistikPeserta/index.types";
import useStatistikStore from "../../state/store";

const useDataStatistik = (): TStatistikPeserta[] => {
  const jenisPelatihan = useStatistikStore(state => state.jenisPelatihan);
  const statistikPeserta = useStatistikStore(state => {
    if (jenisPelatihan === "pelatihan_a_&_b")
      return state.statistikPesertaAB;
    else
      return state.statistikPesertaC;
  });
  return statistikPeserta;
}

export default useDataStatistik;