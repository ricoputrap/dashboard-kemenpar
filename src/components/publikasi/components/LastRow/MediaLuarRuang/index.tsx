import React, { useMemo } from 'react'
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import BarChartPublikasi from '../../BarChartPublikasi';

const URL = "https://drive.google.com/file/d/11o9qZFxBurBgjZ6-0i1hDWWAIYusyzSh/view?usp=sharing";

const MediaLuarRuang: React.FC = () => {
  const dataset: TBarData[] = useMemo(() => [
    { label: "Jumlah ", data: [42, 100, 28, 34, 13, 20], backgroundColor: "#EAC170" },
  ], []);

  const labels: string[] = useMemo(() => {
    const LABELS = ["toba", "byp", "bts", "lombok", "labuan bajo", "wakatobi"];
    return LABELS.map((label: string) => label.toUpperCase());
  }, []);

  return (
    <BarChartPublikasi
      header="Media Luar Ruang"
      title={(
        <>
          MEDIA LUAR RUANG<br/>
          6 DESTINASI PARIWISATA PRIORITAS
        </>
      )}
      dataset={ dataset }
      labels={ labels }
      url={ URL }
    />
  )
}

export default MediaLuarRuang