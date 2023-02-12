import React, { useEffect, useMemo, useState } from 'react'
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import useUsiaPendidikanStore from '../../state/store';
import { TPendidikan } from '../../state/pendidikan.types';
import { getPendidikanSetahun } from '../../utils';

interface ReturnValue {
  title: string;
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const tahun = 2022;
  const lokasi = useUsiaPendidikanStore(state => state.lokasi);
  const pendidikanPertahun = useUsiaPendidikanStore(state => state.pendidikanPertahun);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  const title: string = useMemo(() => {
    const namaLokasi = lokasi.toUpperCase();
    return `GRAFIK PENDIDIKAN DPP ${namaLokasi}`;
  }, [lokasi]);

  useEffect(() => {
    const daftarPendidikan: TPendidikan[] = getPendidikanSetahun(pendidikanPertahun, tahun, lokasi);
    const labels: string[] = daftarPendidikan.map(data => data.pendidikan);
    const daftarJumlahPeserta: number[] = daftarPendidikan.map(data => data.jumlah);

    setLabels(labels);
    setDataset([{
      label: "Jumlah",
      data: daftarJumlahPeserta,
      backgroundColor: "#00FFFF"
    }]);
  }, [tahun, lokasi, pendidikanPertahun]);

  return {
    title,
    labels,
    dataset
  }
}

export default useData