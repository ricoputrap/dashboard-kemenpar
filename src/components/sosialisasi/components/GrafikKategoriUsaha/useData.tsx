import React, { useEffect, useState } from 'react'
import { TBarData } from '../../../reusables/organisms/BarChart/index.types';
import useKategoriUsahaStore from '../../state/kategoriUsaha/store';
import { TKategoriUsaha } from '../../types/kategoriUsaha.types';
import useSosialisasiStore from '../../state/store';

interface ReturnValue {
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const tahun = useSosialisasiStore(state => state.tahun);
  const dpp = useKategoriUsahaStore(state => state.dpp);
  const kategoriUsahaPertahun = useKategoriUsahaStore(state => state.kategoriUsahaPertahun);
  const getKategoriUsahaSetahun = useKategoriUsahaStore(state => state.getKategoriUsahaSetahun);
  
  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  useEffect(() => {
    const daftarKategoriUsaha: TKategoriUsaha[] = getKategoriUsahaSetahun(tahun, dpp);
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
  }, [tahun, dpp, kategoriUsahaPertahun]);

  return { labels, dataset }
}

export default useData