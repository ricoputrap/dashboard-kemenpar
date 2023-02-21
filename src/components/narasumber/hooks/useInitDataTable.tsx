import React, { useEffect } from 'react'
import useNarasumberStore from '../state/store'
import API from '../../../API';
import { TResponseRow } from '../../../API/narasumber/table';
import { TRowData } from '../state/index.types';

interface ReturnValue {
  tableError: any;
  isTableLoading: boolean;
}

const useInitDataTable = (): ReturnValue => {
  const setTableData = useNarasumberStore(state => state.setTableData);

  const { data, error, isLoading } = API.narasumber.table();

  useEffect(() => {
    if (!data) return;

    const rows: TResponseRow[] = data.data;
    const computedData: TRowData[] = rows.map((row, index) => ({
      no: index + 1,
      nama: row.nama,
      institusi: row.institusi,
      domisili: row.domisili,
      materi: [
        "CHSE",
        "Sapta Pesona",
        "Pelayanan Prima",
        "Manajemen Konflik"
      ]
    }));

    setTableData(computedData);
  }, [data]);

  return {
    tableError: error,
    isTableLoading: isLoading
  }
}

export default useInitDataTable