import React, { useEffect, useMemo, useState } from 'react'
import { IDataInput, IDataPointInput, IDataset, ILabelColor } from '../types/dataset.type';
import { ChartData, Point } from 'chart.js';
import { getRandomColor } from '../../../../utils';
import { TDropdownItem } from '../../../../types/utils.type';
import useDropdownOptions from './useDropdownOptions';

const useData = (dataInput: IDataInput[] = [], filtering: boolean = false) => {
  const [labelsWithColor, setLabelsWithColor] = useState<ILabelColor[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [dataset, setDataset] = useState<ChartData<"line", (number | Point | null)[], unknown>>({
    labels: [],
    datasets: []
  });
  
  const dropdownOptions: TDropdownItem[] = useDropdownOptions(categories);

  useEffect(() => {
    let uniqueCategories: string[] = [];
    let activeCategory = "";

    if (filtering) {
      for (let i = 0; i < dataInput.length; i++) {
        dataInput[i].data.forEach(item => {
          if (!uniqueCategories.includes(item.category || ""))
            uniqueCategories.push(item.category || "");
        });
      }

      // capitalize categories
      uniqueCategories = uniqueCategories.map(category => category.toUpperCase());

      setCategories(uniqueCategories);
      setActiveCategory(uniqueCategories[0]);
      activeCategory = uniqueCategories[0];
    }

    const filteredData: IDataInput[] = !filtering
      ? dataInput
      : filterDataByCategory(dataInput, activeCategory);

    let labels: string[] = [];
    if (dataInput.length > 0) {
      labels = filteredData[0].data.map(item => item.label);
    }

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

    // helper variable
    const uniqueLabels: string[] = [];
    const labelsWithColor: ILabelColor[] = datasets.reduce(
      (result: ILabelColor[], item) => {
        const label = item.label.toUpperCase();

        if (!uniqueLabels.includes(label)) {
          uniqueLabels.push(label);
          result.push({
            label,
            color: item.backgroundColor
          });
        }
        return result;
      }, []);

    setDataset({ labels, datasets });
    setLabelsWithColor(labelsWithColor);
  }, [dataInput]);

  useEffect(() => {
    if (activeCategory == "") return;

    // filter the dataset
    const filteredData = filterDataByCategory(dataInput, activeCategory);

    // recompute the label based on the filtered dataset
    let labels: string[] = [];
    if (dataInput.length > 0) {
      labels = filteredData[0].data.map(item => item.label.toUpperCase());
    }

    // precompute dataset
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

    let uniqueLabels: string[] = [];
    const labelsWithColor: ILabelColor[] = datasets.reduce(
      (result: ILabelColor[], item) => {
        if (!uniqueLabels.includes(item.label.toUpperCase())) {
          result.push({
            label: item.label.toUpperCase(),
            color: item.backgroundColor
          });
        }
        return result;
      }, []);

    setDataset({ labels, datasets });
    setLabelsWithColor(labelsWithColor);
  }, [activeCategory, dataInput]);

  const changeCategory = (category: string) => {
    setActiveCategory(category);
  }

  return { dataset, labelsWithColor, dropdownOptions, activeCategory, changeCategory };
}

const filterDataByCategory = (data: IDataInput[], activeCategory: string): IDataInput[] => {
  const filteredData: IDataInput[] = [];

  data.forEach(lineData => {
    const filteredDataPoints: IDataPointInput[] = lineData.data.filter(dataPoint => dataPoint.category?.toUpperCase() == activeCategory);
    filteredData.push({
      ...lineData,
      data: filteredDataPoints
    });
  });

  return filteredData;
}

export default useData