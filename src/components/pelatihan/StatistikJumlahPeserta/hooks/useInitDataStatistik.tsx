import { useEffect } from "react";
import API from "../../../../API";
import useStatistikStore from "../state/store";
import { TStatistikTotal } from "../state/index.types";
import { TStatistikJumlahPeserta } from "../../../../API/pelatihan/statistik";

interface ReturnValue {
  statistikError: any;
  isStatistikLoading: boolean;
}

const useInitDataStatistik = (): ReturnValue => {
  const setStatistikTotalAB = useStatistikStore(state => state.setStatistikTotalAB);
  const setStatistikTotalC = useStatistikStore(state => state.setStatistikTotalC);
  const setStatistikPeserta = useStatistikStore(state => state.setStatistikPeserta);

  const { data, error, isLoading } = API.pelatihan.statistik();

  useEffect(() => {
    if (!data) return;

    const {
      totalAB,
      totalC,
      statistik
    }: TStatistikJumlahPeserta = data.data;

    const statistikTotalAB: TStatistikTotal = {
      totalLaki: totalAB.laki,
      totalPerempuan: totalAB.perempuan,
      totalPeserta: totalAB.laki + totalAB.perempuan
    }

    const statistikTotalC: TStatistikTotal = {
      totalLaki: totalC.laki,
      totalPerempuan: totalC.perempuan,
      totalPeserta: totalC.laki + totalC.perempuan
    }
    
    setStatistikTotalAB(statistikTotalAB);
    setStatistikTotalC(statistikTotalC);
    setStatistikPeserta(statistik);
  }, [data]);

  return {
    statistikError: error,
    isStatistikLoading: isLoading
  }
}

export default useInitDataStatistik;