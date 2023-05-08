import React, { useMemo } from 'react'
import { TBarData } from '../../../reusables/organisms/BarChart/index.types';
import BarChartPublikasi from '../BarChartPublikasi'

interface Props {
  dataset: TBarData;
  labels: string[];
  url: string;
}

const ChartJumlahPemberitaan: React.FC<Props> = ({ dataset, labels, url }) => {
  const title = useMemo<React.ReactNode>(() => (
    <>
      JUMLAH PEMBERITAAN<br/>
      6 DESTINASI PARIWISATA PRIORITAS
    </>
  ), []);

  return (
    <BarChartPublikasi
      title={ title }
      dataset={[dataset]}
      labels={ labels }
      url={ url }
    />
  )
}

export default ChartJumlahPemberitaan