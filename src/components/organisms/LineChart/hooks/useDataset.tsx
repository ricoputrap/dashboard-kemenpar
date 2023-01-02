import React, { useEffect, useState } from 'react'
import { IDataInput, IDataset } from '../types/dataset.type';
import filterDataByCategory from '../utils/filterDataByCategory';
import { ChartData, Point } from 'chart.js';
import { getRandomColor } from '../../../../utils';

type IHookDatasetLabel = (
  data: IDataInput[],
  activeCategory: string,
  filtering: boolean
) => ChartData<"line", (number | Point | null)[], unknown>

const useDatasetAndLabels: IHookDatasetLabel = (data, activeCategory, filtering) => {
  const [labels, setLabels] = useState<string[]>([]);
  const [datasets, setDatasets] = useState<IDataset[]>([]);

  useEffect(() => {
    let labels: string[] = [];

    // filter data
    const filteredData: IDataInput[] = !!filtering
      ? filterDataByCategory(data, activeCategory)
      : data;

    // populate labels
    if (data.length > 0) {
      labels = filteredData[0].data.map(item => item.label.toUpperCase());
    }

    // populate datasets
    const datasets: IDataset[] = filteredData.map(rowData => {
      const color: string = getRandomColor();
      const values: number[] = rowData.data.map(item => item.value);

      return {
        label: rowData.name,
        data: values,
        borderColor: color,
        backgroundColor: color
      }
    });
    
    // update component state
    setLabels(labels);
    setDatasets(datasets);
  }, [data, activeCategory]);

  return { labels, datasets }
}

export default useDatasetAndLabels