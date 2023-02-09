import React, { useMemo } from 'react'
import { TBarData, TLegendItem } from '../index.types';

const useLegends = (dataset: TBarData[], showLegends: boolean = false) => {
  if (!showLegends) return [];
  
  const legends: TLegendItem[] = useMemo(() => {
    return dataset.map(item => ({
      label: item.label,
      color: item.backgroundColor
    }));
  }, [dataset]);

  return legends;
}

export default useLegends