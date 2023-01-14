import { useEffect, useState } from 'react'
import API from '../API';
import { TKPIData } from '../types/home.type';

const initialDataPendampingan: TKPIData = {
  title: "pendampingan",
  stats: []
}
const initialDataPelatihan: TKPIData = {
  title: "pelatihan",
  stats: []
}
const initialDataSosialisasi: TKPIData = {
  title: "sosialisasi",
  stats: []
}

const useDataHome = () => {
  const [pendampingan, setPendampingan] = useState<TKPIData>(initialDataPendampingan);
  const [pelatihan, setPelatihan] = useState<TKPIData>(initialDataPelatihan);
  const [sosialisasi, setSosialisasi] = useState<TKPIData>(initialDataSosialisasi);

  const { data, error, isLoading } = API.home();

  if (error) {
    console.error("error:", error);
  }

  if (isLoading) {
    console.log("isLoading:", isLoading);
  }

  useEffect(() => {
    if (!!data) {
      setPendampingan(data.pendampingan);
      setPelatihan(data.pelatihan);
      setSosialisasi(data.sosialisasi);
    }
  }, [data]);

  return {
    pendampingan, pelatihan, sosialisasi,
    error, isLoading
  }
}

export default useDataHome;