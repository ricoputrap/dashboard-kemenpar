import React, { useEffect, useState } from 'react'
import API from '../API';
import { TStatistikPeserta } from '../components/reusables/organisms/StatistikPeserta/index.types';

const useDataPelatihan = () => {
  const [kpi, setKpi] = useState<TStatistikPeserta[]>([]);

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