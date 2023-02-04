import React, { useEffect, useState } from 'react'
import { TBarData } from '../../../reusables/organisms/BarChart/index.types';
import useKategoriUsahaStore from '../../state/kategoriUsaha/store';

interface ReturnValue {
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const { tahun, kategoriUsahaPertahun } = useKategoriUsahaStore();
  
  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  useEffect(() => {
    if (!kategoriUsahaPertahun.hasOwnProperty(tahun))
      return;

    const kategoriUsahaSetahun = kategoriUsahaPertahun[tahun];
    const labels: string[] = kategoriUsahaSetahun.map(
      kategori => kategori.nama.toUpperCase()
    );

    const daftarJumlahTiapUsaha: number[] = kategoriUsahaSetahun.map(
      kategori => parseInt(kategori.jumlah)
    );

    const dataset: TBarData[] = [
      {
        label: "Jumlah Usaha",
        data: daftarJumlahTiapUsaha,
        backgroundColor: "#FF3D00"
      }
    ]

    setLabels(labels);
    setDataset(dataset);
  }, [kategoriUsahaPertahun]);

  return { labels, dataset }
}

export default useData