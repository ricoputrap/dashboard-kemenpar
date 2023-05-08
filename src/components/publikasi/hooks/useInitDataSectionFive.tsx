import React, { useEffect } from 'react'
import { TResponse } from '../../../API/publikasi'
import usePublikasiStore from '../state/store'
import computeDataSectionFive from '../utils/computeData/section-five';

const useInitDataSectionFive = (data?: TResponse) => {
  const tahun = usePublikasiStore(state => state.tahun);
  const setDataSectionFive = usePublikasiStore(state => state.setDataSectionFive);

  useEffect(() => {
    if (!data) return;

    const { section_five } = data.data.data;
    const dataSectionFive = computeDataSectionFive(section_five);
    setDataSectionFive(dataSectionFive, tahun);
  }, [data, tahun]);
}

export default useInitDataSectionFive