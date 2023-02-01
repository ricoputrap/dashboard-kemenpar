import React, { useEffect, useState } from 'react'
import API from '../API';
import { KPIPesertaType } from '../components/reusables/organisms/KPIPeserta/index.types';

const useDataPelatihan = () => {
  const [kpi, setKpi] = useState<KPIPesertaType[]>([]);

  const { data, error, isLoading } = API.pelatihan();

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

export default useDataPelatihan;