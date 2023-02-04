import React, { useEffect, useMemo, useState } from 'react'
import useUsiaPendidikanStore from '../../../state/usiaPendidikan/store';
import usePendidikanStore from '../../../state/pendidikan/store';
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import { TPendidikan } from '../../../state/pendidikan/index.types';

interface ReturnValue {
  title: string;
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const tahun = useUsiaPendidikanStore(state => state.tahun);
  const lokasi = useUsiaPendidikanStore(state => state.lokasi);
  const pendidikanPertahun = usePendidikanStore(state => state.pendidikanPertahun);
  const getPendidikanSetahun = usePendidikanStore(state => state.getPendidikanSetahun);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  const title: string = useMemo(() => {
    const namaLokasi = lokasi.toUpperCase();
    return `GRAFIK PENDIDIKAN DPP ${namaLokasi}`;
  }, [lokasi]);

  useEffect(() => {
    const daftarPendidikan: TPendidikan[] = getPendidikanSetahun(tahun, lokasi);
    const labels: string[] = daftarPendidikan.map(data => data.pendidikan);
    const daftarJumlahPeserta: number[] = daftarPendidikan.map(data => data.jumlah);

    setLabels(labels);
    setDataset([{
      label: "Jumlah",
      data: daftarJumlahPeserta,
      backgroundColor: "#00FFFF"
    }]);
  }, [tahun, lokasi, pendidikanPertahun]);

  return { title, labels, dataset }
}

export default useData