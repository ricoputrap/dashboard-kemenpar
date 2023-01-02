import React, { useEffect, useState } from 'react'
import { IDataPointInput } from '../components/organisms/LineChart/types/dataset.type';

const narasumberURL = "narasumber/narasumber.json";

type TLineData = {
  name: string;
  data: IDataPointInput[];
}

const useDataNarasumber = () => {
  const [dataNarasumber, setDataNarasumber] = useState<TLineData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const promise = Promise.all([
        fetch(narasumberURL)
      ]);

      const [
        narasumberResponse
      ] = await promise;
      
      const dataNarasumber = (await narasumberResponse.json()).data;

      setDataNarasumber(dataNarasumber);
    }

    fetchData();
  }, [])

  return {
    dataNarasumber
  }
}

export default useDataNarasumber