import React, { useEffect, useState } from 'react'
import { KPIPesertaType } from '../types/sosialisasi.type'
import API from '../API';

const useDataSosialisasi = () => {
  const [kpi, setKpi] = useState<KPIPesertaType[]>([]);

  const { data, error, isLoading } = API.sosialisasi();

  if (error) {
    console.error("error:", error);
  }

  if (isLoading) {
    console.log("isLoading:", isLoading);
  }

  useEffect(() => {
    if (!!data) {
      setKpi(data.data.kpi);
    }
  }, [data]);

  return { kpi, error, isLoading }
}

export default useDataSosialisasi