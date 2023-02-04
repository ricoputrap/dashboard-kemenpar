import React, { useMemo } from 'react'
import useInitDataStatistik from './useInitDataStatistik';
import useInitDataKategoriUsaha from './useInitDataKategoriUsaha';

interface ReturnValue {
  error: any;
  isLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const { statistikError, isStatistikLoading } = useInitDataStatistik();
  const { kategoriUsahaError, isKategoriUsahaLoading } = useInitDataKategoriUsaha();

  const isLoading = useMemo(() => {
    return isStatistikLoading || isKategoriUsahaLoading;
  }, [isStatistikLoading]);
  
  return {
    error: statistikError,
    isLoading
  }
}

export default useInitData