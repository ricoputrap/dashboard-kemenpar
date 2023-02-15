import React, { useMemo } from 'react'
import useInitDataStatistik from './StatistikJumlahPeserta/hooks/useInitDataStatistik'
import useInitDataUsiaPendidikan from './GrafikUsiaPendidikan/hooks/useInitDataUsiaPendidikan';
import useInitDataMateri from './MateriPelatihan/hooks/useInitDataMateri';
import useInitDataNilai from './GrafikNilai/hooks/useInitDataNilai';

interface ReturnValue {
  error: any;
  isLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const { statistikError, isStatistikLoading } = useInitDataStatistik();
  const { usiaPendidikanError, isUsiaPendidikanLoading } = useInitDataUsiaPendidikan();
  const { materiError, isMateriLoading } = useInitDataMateri();
  const { nilaiError, isNilaiLoading } = useInitDataNilai();

  const isLoading: boolean = useMemo(() => {
    return isStatistikLoading && isUsiaPendidikanLoading
      && isMateriLoading && isNilaiLoading;
  }, [isStatistikLoading, isUsiaPendidikanLoading]);

  return {
    error: statistikError,
    isLoading
  }
}

export default useInitData