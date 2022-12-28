import React, { useEffect, useState } from 'react'
import { IDataPointInput } from '../components/organisms/LineChart/types/dataset.type';
import { TBarChartItem } from '../types/charts.type';

const penilaianPelatihanURL = "home/penilaianPelatihan.json";
const jumlahKegiatanURL = "home/jumlahKegiatan.json";
const topListURL = "home/topList.json";

type TLineData = {
  name: string;
  data: IDataPointInput[];
}

const useDataHome = () => {
  const [penilaianPelatihan, setPenilaianPelatihan] = useState<TLineData[]>([]);
  const [jumlahKegiatan, setJumlahKegiatan] = useState<TLineData[]>([]);
  const [topList, setTopList] = useState<TBarChartItem[]>([]);

  // fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      const promise = Promise.all([
        fetch(penilaianPelatihanURL),
        fetch(jumlahKegiatanURL),
        fetch(topListURL)
      ]);
  
      const [
        penilaianPelatihanResponse,
        jumlahKegiatanResponse,
        topListResponse
      ] = await promise;
  
      const jumlahKegiatan = (await jumlahKegiatanResponse.json()).data;
      const penilaianPelatihan = (await penilaianPelatihanResponse.json()).data;
      const topList = (await topListResponse.json()).data;

      setPenilaianPelatihan(penilaianPelatihan);
      setJumlahKegiatan(jumlahKegiatan);
      setTopList(topList);
    }

    fetchData();
  }, []);

  return {
    penilaianPelatihan,
    jumlahKegiatan,
    topList
  }
}

export default useDataHome