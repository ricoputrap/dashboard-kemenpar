import React, { useMemo } from 'react'
import useInitDataJumlah from './useInitDataJumlah';

export const useInitData = () => {
  const { jumlahError, isJumlahLoading } = useInitDataJumlah();
  
  const isLoading = useMemo(() => {
    return isJumlahLoading;
  }, [isJumlahLoading]);

  return {
    error: jumlahError,
    isLoading
  }
}

export default useInitData;
