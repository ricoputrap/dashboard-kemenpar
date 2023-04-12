import React, { useEffect } from 'react'
import API from '../../../API'
import useNilaiStore from '../state/nilai/store';
import { TNilaiSetahun } from '../../../API/sosialisasi/nilai';
import { TNilai } from "../types/nilai.types";
import useSosialisasiStore from '../state/store';

interface ReturnValue {
  nilaiError: any;
  isNilaiLoading: boolean;
}

const useInitDataNilai = (): ReturnValue => {
  const tahun = useSosialisasiStore(state => state.tahun);
  const { data, error, isLoading } = API.sosialisasi.nilai(tahun);
  const {
    setTahun,
    setNilaiPreTestPertahun,
    setNilaiPostTestPertahun
  } = useNilaiStore();

  useEffect(() => {
    if (!data) return;

    const { tahun, data: nilaiPerLokasi }: TNilaiSetahun = data.data;

    const daftarNilaiPreTest: TNilai[] = [];
    const daftarNilaiPostTest: TNilai[] = [];

    nilaiPerLokasi.forEach(nilai => {
      const lokasi = nilai.lokasi === 'labuan_bajo' ? 'l.bajo' : nilai.lokasi;
      
      daftarNilaiPreTest.push({
        lokasi,
        nilai: nilai["pre-test"]
      });

      daftarNilaiPostTest.push({
        lokasi,
        nilai: nilai["post-test"]
      });
    });

    setTahun(tahun);
    setNilaiPreTestPertahun(daftarNilaiPreTest, tahun);
    setNilaiPostTestPertahun(daftarNilaiPostTest, tahun);
  }, [data]);

  return {
    nilaiError: error,
    isNilaiLoading: isLoading
  }
}

export default useInitDataNilai