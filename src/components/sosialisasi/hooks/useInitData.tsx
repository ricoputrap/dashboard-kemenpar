import React, { useMemo } from 'react'
import useInitDataStatistik from './useInitDataStatistik';

interface ReturnValue {
  error: any;
  isLoading: boolean;
}

const useInitData = (): ReturnValue => {
  const { statistikError, isStatistikLoading } = useInitDataStatistik();

  const isLoading = useMemo(() => {
    return isStatistikLoading;
  }, [isStatistikLoading]);
  
  return {
    error: statistikError,
    isLoading
  }
}

export default useInitData