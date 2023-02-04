import React, { useEffect, useMemo, useState } from 'react'
import useUsiaStore from '../../../state/usia/store';
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import { TUsia } from '../../../state/usia/index.types';
import useUsiaPendidikanStore from '../../../state/usiaPendidikan/store';

interface ReturnValue {
  title: string;
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const { tahun, lokasi } = useUsiaPendidikanStore();

  const {
    usiaPertahun,
    getUsiaSetahun
  } = useUsiaStore();

  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  const title: string = useMemo(() => {
    const namaLokasi = lokasi.toUpperCase();
    return `GRAFIK USIA DPP ${namaLokasi}`;
  }, [lokasi]);

  useEffect(() => {
    const daftarUsia: TUsia[] = getUsiaSetahun(tahun, lokasi);

    const labels: string[] = daftarUsia.map(data => data.usia);
    const daftarJumlahPeserta: number[] = daftarUsia.map(data => data.jumlah);

    setLabels(labels);
    setDataset([
      {
        label: "Jumlah",
        data: daftarJumlahPeserta,
        backgroundColor: "#00FF38"
      }
    ])
  }, [tahun, lokasi, usiaPertahun]);

  return { title, labels, dataset }
}

export default useData