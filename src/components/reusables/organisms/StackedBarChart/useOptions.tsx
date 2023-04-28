import React, { useMemo } from 'react'
import { computeOptions } from './utils'

interface Params {
  labels: string[];
  fontSize?: number;
  fontWeight?: number;
  borderColor?: string;
  showGrid?: boolean;
}

const useOptions = ({
  labels,
  fontSize = 12,
  fontWeight = 600,
  borderColor = "#D9D9D9",
  showGrid = false
}: Params) => {
  const options = useMemo(
    () => computeOptions(labels, fontSize, fontWeight, borderColor, showGrid),
    [labels, fontSize, fontWeight, borderColor, showGrid]
  );

  return options;
}

export default useOptions