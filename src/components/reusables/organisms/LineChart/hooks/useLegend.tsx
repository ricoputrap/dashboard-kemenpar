import React, { useEffect, useState } from 'react'
import { IDataset, ILabelColor } from '../types/dataset.type';

const useLegend = (datasets: IDataset[]) => {
  const [labelsWithColor, setLabelsWithColor] = useState<ILabelColor[]>([]);

  useEffect(() => {
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

    setLabelsWithColor(labelsWithColor);
  }, [datasets]);

  return labelsWithColor;
}

export default useLegend