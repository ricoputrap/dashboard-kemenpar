import React, { useMemo } from 'react'
import useInitDataStatistik from './StatistikJumlahPeserta/hooks/useInitDataStatistik'
import useInitDataUsiaPendidikan from './GrafikUsiaPendidikan/hooks/useInitDataUsiaPendidikan';

interface ReturnValue {
  error: any;
  isLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const { statistikError, isStatistikLoading } = useInitDataStatistik();
  const { usiaPendidikanError, isUsiaPendidikanLoading } = useInitDataUsiaPendidikan();

  const isLoading: boolean = useMemo(() => {
    return isStatistikLoading && isUsiaPendidikanLoading;
  }, [isStatistikLoading, isUsiaPendidikanLoading]);

  return {
    error: statistikError,
    isLoading
  }
}

export default useInitData