import React, { useEffect, useState } from 'react'
import { IDataPointInput } from '../components/organisms/LineChart/types/dataset.type';
import { TBarChartItem } from '../types/charts.type';

const narasumberURL = "narasumber/narasumber.json";
const topListURL = "narasumber/topList.json";

type TLineData = {
  name: string;
  data: IDataPointInput[];
}

const useDataNarasumber = () => {
  const [dataNarasumber, setDataNarasumber] = useState<TLineData[]>([]);
  const [dataTopList, setDataTopList] = useState<TBarChartItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promise = Promise.all([
        fetch(narasumberURL),
        fetch(topListURL)
      ]);

      const [
        narasumberResponse,
        topListResponse
      ] = await promise;
      
      const dataNarasumber = (await narasumberResponse.json()).data;
      const dataTopList = (await topListResponse.json()).data;

      setDataNarasumber(dataNarasumber);
      setDataTopList(dataTopList);
    }

    fetchData();
  }, [])

  return {
    dataNarasumber,
    dataTopList
  }
}

export default useDataNarasumber