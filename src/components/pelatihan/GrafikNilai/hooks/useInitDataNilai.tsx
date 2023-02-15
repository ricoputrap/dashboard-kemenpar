import { useEffect } from "react";
import API from "../../../../API";
import useNilaiStore from "../state/store";
import { TNilai } from "../state/index.types";

interface ReturnValue {
  nilaiError: any;
  isNilaiLoading: boolean;
}

const useInitDataNilai = (): ReturnValue => {
  const jenisPelatihan = useNilaiStore(state => state.jenisPelatihan);
  const setNilaiPertahun = useNilaiStore(state => state.setNilaiPertahun);
  const tahun = 2022;

  const { data, error, isLoading } = API.pelatihan.nilai(tahun, jenisPelatihan);

  useEffect(() => {
    if (!data) return;

    const { data: daftarNilai, pelatihan, tahun } = data.data;

    const daftarNilaiPreTest: TNilai[] = daftarNilai.map(nilai => ({
      lokasi: nilai.lokasi,
      nilai: nilai["pre-test"]
    }));

    const daftarNilaiPostTest: TNilai[] = daftarNilai.map(nilai => ({
      lokasi: nilai.lokasi,
      nilai: nilai["post-test"]
    }));

    setNilaiPertahun(daftarNilaiPreTest, daftarNilaiPostTest, tahun, jenisPelatihan);
  }, [data]);

  return {
    nilaiError: error,
    isNilaiLoading: isLoading
  }
}

export default useInitDataNilai;