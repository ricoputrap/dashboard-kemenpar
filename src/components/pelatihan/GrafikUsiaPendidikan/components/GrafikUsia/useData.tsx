import React, { useEffect, useMemo, useState } from 'react'
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import useUsiaPendidikanStore from '../../state/store';import { TUsia, TUsiaPerlokasi } from '../../state/usia.types';
import { getUsiaSetahun } from '../../utils';

interface IBarChartData {
  title: string;
  labels: string[];
  dataset: TBarData[];
}

const useData = (): IBarChartData => {
  const tahun: number = 2022;
  const lokasi: string = useUsiaPendidikanStore(state => state.lokasi);
  const usiaPertahun = useUsiaPendidikanStore(state => state.usiaPertahun);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  const title: string = useMemo(() => {
    const namaLokasi = lokasi.toUpperCase();
    return `GRAFIK USIA DPP ${namaLokasi}`;
  }, [lokasi]);

  useEffect(() => {
    const daftarUsiaSetahun: TUsia[] = getUsiaSetahun(usiaPertahun, 2022, lokasi);

    const labels: string[] = daftarUsiaSetahun.map(data => data.usia);
    const daftarJumlahPeserta: number[] = daftarUsiaSetahun.map(data => data.jumlah);

    setLabels(labels);
    setDataset([
      {
        label: "Jumlah",
        data: daftarJumlahPeserta,
        backgroundColor: "#00FF38"
      }
    ]);
  }, [tahun, lokasi, usiaPertahun]);

  return {
    title,
    labels,
    dataset
  }
}

export default useData