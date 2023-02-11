import { useEffect } from "react";
import API from "../../../../API";
import useStatistikStore from "../state/store";
import { TStatistikPesertaSetahun } from "../../../../API/pelatihan/statistik";

interface ReturnValue {
  statistikError: any;
  isStatistikLoading: boolean;
}

const useInitDataStatistik = (): ReturnValue => {
  const setStatistikPesertaPertahun = useStatistikStore(state => state.setStatistikPesertaPertahun);
  const tahun = 2022;

  const { data, error, isLoading } = API.pelatihan.statistik(tahun);

  useEffect(() => {
    console.log("===== data:", data)
    if (!data) return;

    const { tahun, statistik }: TStatistikPesertaSetahun = data.data;

    setStatistikPesertaPertahun(statistik, tahun);
  }, [data]);

  return {
    statistikError: error,
    isStatistikLoading: isLoading
  }
}

export default useInitDataStatistik;