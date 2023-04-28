import React, { useMemo } from 'react'
import BarChartPublikasi from '../BarChartPublikasi'

const URL = "https://drive.google.com/file/d/1G1vcywG8kHbyOLKCYbYnLNTAJ3kY0Xic/view?usp=share_link";
const dataset = [
  { label: "Media", data: [17, 9, 4, 14, 6, 5], backgroundColor: "#EAC170" },
]
const LABELS: string[] = ["toba", "byp", "bts", "lombok", "labuan bajo", "wakatobi"];

const ChartJumlahPemberitaan: React.FC = () => {
  const title = useMemo<React.ReactNode>(() => (
    <>
      JUMLAH PEMBERITAAN<br/>
      6 DESTINASI PARIWISATA PRIORITAS
    </>
  ), []);

  return (
    <BarChartPublikasi
      title={ title }
      dataset={ dataset }
      labels={ LABELS }
      url={ URL }
    />
  )
}

export default ChartJumlahPemberitaan