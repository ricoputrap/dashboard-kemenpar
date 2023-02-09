import React, { useMemo } from 'react'
import useInitDataStatistik from './useInitDataStatistik';
import useInitDataKategoriUsaha from './useInitDataKategoriUsaha';
import useInitDataNilai from './useInitDataNilai';
import useInitDataUsiaPendidikan from './useInitDataUsiaPendidikan';

interface ReturnValue {
  error: any;
  isLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const { statistikError, isStatistikLoading } = useInitDataStatistik();
  const { kategoriUsahaError, isKategoriUsahaLoading } = useInitDataKategoriUsaha();
  const { nilaiError, isNilaiLoading } = useInitDataNilai();
  const { usiaPendidikanError, isUsiaPendidikanLoading } = useInitDataUsiaPendidikan();

  const isLoading = useMemo(() => {
    return isStatistikLoading || isKategoriUsahaLoading 
        || isNilaiLoading || isUsiaPendidikanLoading;
  }, [isStatistikLoading]);
  
  return {
    error: statistikError,
    isLoading
  }
}

export default useInitData