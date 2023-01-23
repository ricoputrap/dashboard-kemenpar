import React, { useEffect, useState } from 'react'
import { KPIPesertaType } from '../types/sosialisasi.type'
import API from '../API';
import { TGenderData } from '../components/organisms/DoughnutChartPeserta/types/legends.types';

const useDataSosialisasi = () => {
  const [kpi, setKpi] = useState<KPIPesertaType[]>([]);
  const [chartData, setChartData] = useState<TGenderData[]>([]);

  const { data, error, isLoading } = API.sosialisasi();

  if (error) {
    console.error("error:", error);
  }

  if (isLoading) {
    console.log("isLoading:", isLoading);
  }

  useEffect(() => {
    if (!!data) {
      const kpiData = data.data.kpi;

      const totalMen: number = kpiData.reduce((total, item) => total + item.laki, 0);
      const totalWomen: number = kpiData.reduce((total, item) => total + item.perempuan, 0);
      const total: number = totalMen + totalWomen;

      let percentMen: number = (totalMen * 100) / total;
      let percentWomen: number = (totalWomen * 100) / total;

      if (percentMen < percentWomen) {
        percentMen = Math.floor(percentMen);
        percentWomen = Math.ceil(percentWomen);
      }
      else {
        percentMen = Math.ceil(percentMen);
        percentWomen = Math.floor(percentWomen);
      }

      const menData: TGenderData = {
        value: totalMen,
        percent: percentMen,
        label: "laki-laki",
        color: "#00FFFF"
      }

      const womenData: TGenderData = {
        value: totalWomen,
        percent: percentWomen,
        label: "perempuan",
        color: "#FF1F00"
      }

      setKpi(kpiData);
      setChartData([menData, womenData]);
    }
  }, [data]);

  return { kpi, chartData, error, isLoading }
}

export default useDataSosialisasi