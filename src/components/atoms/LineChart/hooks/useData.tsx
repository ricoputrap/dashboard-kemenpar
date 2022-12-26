import React, { useEffect, useState } from 'react'
import { IDataInput, IDataset } from '../types/dataset.type';
import { ChartData, Point } from 'chart.js';
import { getRandomColor } from '../../../../utils';

const useData = (dataInput: IDataInput[] = []): ChartData<"line", (number | Point | null)[], unknown> => {
  const [data, setData] = useState<ChartData<"line", (number | Point | null)[], unknown>>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    let labels: string[] = [];

    if (dataInput.length > 0) {
      labels = dataInput[0].data.map(item => item.label);
    }

    const datasets: IDataset[] = dataInput.map(rowData => {
      const color: string = getRandomColor();
      const values: number[] = rowData.data.map(item => item.value);

      return {
        label: rowData.name,
        data: values,
        borderColor: color,
        backgroundColor: color
      }
    });

    setData({ labels, datasets });
  }, [dataInput]);

  return data;
}

export default useData