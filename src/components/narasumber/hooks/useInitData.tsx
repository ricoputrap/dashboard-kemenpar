import React, { useMemo } from 'react'
import useInitDataJumlah from './useInitDataJumlah';
import useInitDataTable from './useInitDataTable';

export const useInitData = () => {
  const { jumlahError, isJumlahLoading } = useInitDataJumlah();
  const { tableError, isTableLoading } = useInitDataTable();

  const isLoading = useMemo(() => {
    return isJumlahLoading && isTableLoading;
  }, [isJumlahLoading, isTableLoading]);

  const error: string = useMemo(() => {
    return jumlahError || tableError || ""
  }, [jumlahError, tableError]);

  return {
    error,
    isLoading
  }
}

export default useInitData;
