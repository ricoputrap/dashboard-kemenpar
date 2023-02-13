import React, { useMemo } from 'react'
import useInitDataStatistik from './StatistikJumlahPeserta/hooks/useInitDataStatistik'
import useInitDataUsiaPendidikan from './GrafikUsiaPendidikan/hooks/useInitDataUsiaPendidikan';
import useInitDataMateri from './MateriPelatihan/hooks/useInitDataMateri';

interface ReturnValue {
  error: any;
  isLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const { statistikError, isStatistikLoading } = useInitDataStatistik();
  const { usiaPendidikanError, isUsiaPendidikanLoading } = useInitDataUsiaPendidikan();
  const { materiError, isMateriLoading } = useInitDataMateri();

  const isLoading: boolean = useMemo(() => {
    return isStatistikLoading && isUsiaPendidikanLoading && isMateriLoading;
  }, [isStatistikLoading, isUsiaPendidikanLoading]);

  return {
    error: statistikError,
    isLoading
  }
}

export default useInitData