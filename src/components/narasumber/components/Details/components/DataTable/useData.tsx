import React, { useMemo } from 'react'
import useNarasumberStore from '../../../../state/store'
import { TRowData } from '../../../../state/index.types';

const useData = (): TRowData[] => {
  const tableData: TRowData[] = useNarasumberStore(state => state.tableData);
  const searchValue = useNarasumberStore(state => state.searchValue);

  const data: TRowData[] = useMemo(() => {
    if (searchValue == "")
      return tableData;

    const filteredData = tableData.filter(row => {
      const { nama, institusi, domisili, materi } = row;

      if (nama.toLowerCase().includes(searchValue.toLowerCase()))
        return true;

      if (institusi.toLowerCase().includes(searchValue.toLowerCase()))
        return true;
      
      if (domisili.toLowerCase().includes(searchValue.toLowerCase()))
        return true;

      let valid = false;
      for (let i = 0; i < materi.length; i++) {
        if (!materi[i].toLowerCase().includes(searchValue.toLowerCase()))
          continue;

        valid = true;
        break;
      }

      return valid;
    });
    return filteredData;
  }, [tableData, searchValue]);  

  return data;
}

export default useData