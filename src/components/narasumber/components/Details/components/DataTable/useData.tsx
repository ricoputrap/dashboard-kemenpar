import React from 'react'
import useNarasumberStore from '../../../../state/store'
import { TRowData } from '../../../../state/index.types';

const useData = (): TRowData[] => {
  const tableData = useNarasumberStore(state => state.tableData);

  return tableData;
}

export default useData