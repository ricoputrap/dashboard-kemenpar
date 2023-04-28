import React, { useMemo } from 'react'
import useWindowSize from '../../../../hooks/useWindowSize';

const useWidth = () => {
  const { width } = useWindowSize();
  const barChartsWidth: number = useMemo(() => {
    if (width == 0) {
      const WIDTH = 630;
      return WIDTH;
    }
    const GAP = 68;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const contentWidth = width - PAGE_PADDING_HORIZONTAL - GAP;
    return contentWidth / 2;
  }, [width]);

  return barChartsWidth;
}

export default useWidth