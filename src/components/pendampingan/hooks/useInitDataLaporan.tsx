import { useEffect } from "react";
import API from "../../../API";
import useStore from "../state/store";

interface ReturnValue {
  isLaporanError: any;
  isLaporanLoading: boolean;
}

const useInitDataLaporan = (): ReturnValue => {
  const activeDPP: string = useStore((state) => state.activeDPP);
  const setDataPendampinganPerDesa = useStore(
    (state) => state.setDataPendampinganPerDesa
  );

  const { data, error, isLoading } = API.pendampinganLaporan(activeDPP);
  
  useEffect(() => {
    if (!data) return;

    const dataPendampingan: TPendampinganDesa[] = data.data.data;
    setDataPendampinganPerDesa(dataPendampingan);
  }, [data]);

  return {
    isLaporanError: error,
    isLaporanLoading: isLoading
  }
}

export default useInitDataLaporan;