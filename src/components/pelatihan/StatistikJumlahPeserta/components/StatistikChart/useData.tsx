import React, { useMemo } from 'react'
import useStatistikStore from '../../state/store';
import { IStatistikChartData, computeData } from './utils';

type ReturnValue = {
  chartPesertaAB: IStatistikChartData;
  chartPesertaC: IStatistikChartData;
}

const useData = (): ReturnValue => {
  const statistikTotalAB = useStatistikStore(state => state.statistikTotalAB);
  const statistikTotalC = useStatistikStore(state => state.statistikTotalC);

  const chartPesertaAB: IStatistikChartData = useMemo(() => {
    const { menData, womenData } = computeData(statistikTotalAB);
    return { menData, womenData };
  }, [statistikTotalAB]);

  const chartPesertaC: IStatistikChartData = useMemo(() => {
    const { menData, womenData } = computeData(statistikTotalC);
    return { menData, womenData };
  }, [statistikTotalC]);

  return { chartPesertaAB, chartPesertaC }
}

export default useData