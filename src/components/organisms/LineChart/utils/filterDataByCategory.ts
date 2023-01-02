import { IDataInput, IDataPointInput } from "../types/dataset.type";

type TFilterFunction = (
  data: IDataInput[],
  activeCategory: string
) => IDataInput[];

const filterDataByCategory: TFilterFunction = (data, activeCategory) => {
    const filteredData: IDataInput[] = [];

  data.forEach(lineData => {
    const filteredDataPoints: IDataPointInput[] = lineData.data.filter(
      dataPoint => {
        return dataPoint.category?.toUpperCase() == activeCategory;
      });

    filteredData.push({
      ...lineData,
      data: filteredDataPoints
    });
  });

  return filteredData;
}

export default filterDataByCategory;