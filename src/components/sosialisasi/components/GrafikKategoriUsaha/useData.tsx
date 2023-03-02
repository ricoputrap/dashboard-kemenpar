import React, { useEffect, useState } from 'react'
import { TBarData } from '../../../reusables/organisms/BarChart/index.types';
import useKategoriUsahaStore from '../../state/kategoriUsaha/store';
import { TKategoriUsaha } from '../../types/kategoriUsaha.types';

interface ReturnValue {
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const dpp = useKategoriUsahaStore(state => state.dpp);
  const kategoriUsahaPerlokasi = useKategoriUsahaStore(state => state.kategoriUsahaPerlokasi);
  
  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  useEffect(() => {
    if (!kategoriUsahaPerlokasi.hasOwnProperty(dpp)) {
      setDataset([]);
      return;
    }

    const daftarKategoriUsaha: TKategoriUsaha[] = kategoriUsahaPerlokasi[dpp];
    const labels: string[] = daftarKategoriUsaha.map(
      kategori => kategori.nama.toUpperCase()
    );

    const daftarJumlahTiapUsaha: number[] = daftarKategoriUsaha.map(
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
  }, [kategoriUsahaPerlokasi, dpp]);

  return { labels, dataset }
}

export default useData