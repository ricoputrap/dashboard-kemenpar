import { useEffect } from "react";
import API from "../../../API";
import useStore from "../state/store";
import { TPendampinganDesa } from "../types/laporan.types";

interface ReturnValue {
  isLaporanError: any;
  isLaporanLoading: boolean;
}

const useInitDataLaporan = (): ReturnValue => {
  const activeDPP: string = useStore((state) => state.activeDPP);
  const setDataPendampinganPerDPP = useStore(
    (state) => state.setDataPendampinganPerDPP
  );

  const { data, error, isLoading } = API.pendampinganLaporan(activeDPP);
  
  useEffect(() => {
    if (!data) return;

    const dpp: string = data.data.dpp;
    const dataPendampingan: TPendampinganDesa[] = data.data.data;

    setDataPendampinganPerDPP(dpp, dataPendampingan);
  }, [data]);

  return {
    isLaporanError: error,
    isLaporanLoading: isLoading
  }
}

export default useInitDataLaporan;