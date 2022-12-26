import React, { useEffect, useState } from 'react'
import { IDataInput, IDataset, ILabelColor } from '../types/dataset.type';
import { ChartData, Point } from 'chart.js';
import { getRandomColor } from '../../../../utils';

const useData = (dataInput: IDataInput[] = []) => {
  const [dataset, setDataset] = useState<ChartData<"line", (number | Point | null)[], unknown>>({
    labels: [],
    datasets: []
  });

  const [labelsWithColor, setLabelsWithColor] = useState<ILabelColor[]>([]);

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

    // helper variable
    const uniqueLabels: string[] = [];
    const labelsWithColor: ILabelColor[] = datasets.reduce(
      (result: ILabelColor[], item) => {
        if (!uniqueLabels.includes(item.label)) {
          result.push({
            label: item.label,
            color: item.backgroundColor
          });
        }
        return result;
      }, []);

    setDataset({ labels, datasets });
    setLabelsWithColor(labelsWithColor);
  }, [dataInput]);

  return { dataset, labelsWithColor };
}

export default useData