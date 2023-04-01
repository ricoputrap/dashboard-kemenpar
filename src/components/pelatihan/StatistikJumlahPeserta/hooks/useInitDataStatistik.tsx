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
  const setStatistikPesertaAB = useStatistikStore(state => state.setStatistikPesertaAB);
  const setStatistikPesertaC = useStatistikStore(state => state.setStatistikPesertaC);
  const jenisPelatihan = useStatistikStore(state => state.jenisPelatihan);

  const { data: dataJenisKelamin } = API.pelatihan.statistikJenisKelamin();
  const { data, error, isLoading } = API.pelatihan.statistik(jenisPelatihan);

  useEffect(() => {
    if (!data || !dataJenisKelamin) return;

    const { statistik }: TStatistikJumlahPeserta = data.data;
    const { totalAB, totalC } = dataJenisKelamin.data;

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

    if (jenisPelatihan === "pelatihan_a_&_b")
      setStatistikPesertaAB(statistik);
    else
      setStatistikPesertaC(statistik);
  }, [data]);

  return {
    statistikError: error,
    isStatistikLoading: isLoading
  }
}

export default useInitDataStatistik;