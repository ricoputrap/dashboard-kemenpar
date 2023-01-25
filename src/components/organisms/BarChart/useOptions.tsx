import React, { useMemo } from 'react'
import computeOptions from './options';

const useOptions = (labels: string[], showGrid: boolean = false) => {
  const options = useMemo(
    () => computeOptions(labels, showGrid),
    [labels, showGrid]
  );

  return options;
}

export default useOptions