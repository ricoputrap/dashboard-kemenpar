import React, { useMemo } from 'react'
import useStatistikStore from '../../state/store';
import getStatistikPesertaSetahun from '../../utils/getStatistikPesertaSetahun';
import computeStatistikTotal from '../../utils/computeStatistikTotal';
import { IStatistikChartData, computeData } from './utils';

const useData = (): IStatistikChartData => {
  const statistikPesertaPertahun = useStatistikStore(state => state.statistikPesertaPertahun);
  const tahun = 2022;

  const { menData, womenData }: IStatistikChartData = useMemo(() => {
    const statistikSetahun = getStatistikPesertaSetahun(statistikPesertaPertahun, tahun);
    const statistikTotal = computeStatistikTotal(statistikSetahun);
    const data: IStatistikChartData = computeData(statistikTotal);
    
    return data;
  }, [statistikPesertaPertahun, tahun]);

  return { menData, womenData }
}

export default useData