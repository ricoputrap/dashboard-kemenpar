import React from 'react'
import { IDataInput, IDataset } from '../types/dataset.type';
import { TDropdownItem } from '../../../../../types/utils.type';
import useDropdownOptions from './useDropdownOptions';
import useCategory from './useCategory';
import useLegend from './useLegend';
import useDatasetAndLabels from './useDataset';

const useData = (dataInput: IDataInput[] = [], filtering: boolean = false) => {
  const {
    categories,
    activeCategory,
    changeCategory
  } = useCategory(filtering, dataInput);

  const {
    datasets,
    labels
  } = useDatasetAndLabels(dataInput, activeCategory, filtering);

  const labelsWithColor = useLegend(datasets as IDataset[]);
  const dropdownOptions: TDropdownItem[] = useDropdownOptions(categories);

  return {
    dataset: { datasets, labels },
    labelsWithColor,
    dropdownOptions,
    activeCategory,
    changeCategory
  };
}



export default useData