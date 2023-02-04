import React, { useEffect, useState } from 'react'
import useNilaiStore from '../../state/nilai/store';
import { TBarData } from '../../../reusables/organisms/BarChart/index.types';
import { initialDataPostTest, initialDataPreTest } from './initialValues';
import { TNilai } from '../../types/nilai.types';

interface ReturnValue {
  labels: string[];
  dataset: TBarData[];
}

const useData = (): ReturnValue => {
  const {
    tahun,
    nilaiPreTestPertahun,
    nilaiPostTestPertahun
  } = useNilaiStore();

  const [labels, setLabels] = useState<string[]>([]);
  const [dataPreTest, setDataPreTest] = useState<TBarData>(initialDataPreTest);
  const [dataPostTest, setDataPostTest] = useState<TBarData>(initialDataPostTest);

  useEffect(() => {
    if (!nilaiPreTestPertahun.hasOwnProperty(tahun))
      return;

    const nilaiSetahun: TNilai[] = nilaiPreTestPertahun[tahun];
    const labels: string[] = nilaiSetahun.map(
      data => data.lokasi.toUpperCase()
    );

    const daftarNilaiPerlokasi: number[] = nilaiSetahun.map(
      data => data.nilai
    );

    const dataPreTest: TBarData = {
      ...initialDataPreTest,
      data: daftarNilaiPerlokasi
    }

    setLabels(labels);
    setDataPreTest(dataPreTest);
  }, [tahun, nilaiPreTestPertahun]);

  useEffect(() => {
    if (!nilaiPostTestPertahun.hasOwnProperty(tahun))
      return;

    const nilaiSetahun: TNilai[] = nilaiPostTestPertahun[tahun];
    const daftarNilaiPerlokasi: number[] = nilaiSetahun.map(
      data => data.nilai
    );

    const dataPostTest: TBarData = {
      ...initialDataPostTest,
      data: daftarNilaiPerlokasi
    }

    setDataPostTest(dataPostTest);
  }, [tahun, nilaiPostTestPertahun]);

  return {
    labels,
    dataset: [
      dataPreTest,
      dataPostTest
    ]
  }
}

export default useData