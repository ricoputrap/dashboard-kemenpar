import React, { useEffect, useState } from 'react'
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import useNilaiStore from '../../state/store';
import { TNilaiPerJenis, TNilaiPerPelatihan } from '../../state/index.types';

interface ReturnValue {
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const tahun: number = 2022;
  const nilaiPertahun = useNilaiStore(state => state.nilaiPertahun);
  const jenisPelatihan = useNilaiStore(state => state.jenisPelatihan);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<TBarData[]>([]);

  useEffect(() => {
    if (!nilaiPertahun.hasOwnProperty(tahun))
      return;

    const nilaiSetahun: TNilaiPerPelatihan = nilaiPertahun[tahun];
    if (!nilaiSetahun.hasOwnProperty(jenisPelatihan))
      return;

    const { preTest, postTest }: TNilaiPerJenis = nilaiSetahun[jenisPelatihan];

    const labels: string[] = preTest.map(nilai => nilai.lokasi.toUpperCase());
    const daftarNilaiPreTest: number[] = preTest.map(item => item.nilai);
    const daftarNilaiPostTest: number[] = postTest.map(item => item.nilai);

    const dataPreTest: TBarData = {
      label: "Pre-test",
      data: daftarNilaiPreTest,
      backgroundColor: "#FF0000"
    }
    const dataPostTest: TBarData = {
      label: "Post-test",
      data: daftarNilaiPostTest,
      backgroundColor: "#00FFFF"
    }

    setLabels(labels);
    setDataset([dataPreTest, dataPostTest]);
  }, [nilaiPertahun]);

  return { labels, dataset }
}

export default useData