import React, { useMemo } from 'react'
import usePublikasiStore from '../../state/store'

const useData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const sectionFive = usePublikasiStore(state => state.sectionFive);

  const dataSectionFive = useMemo(() => {
    return sectionFive[tahun];
  }, [tahun, sectionFive]);

  return { ...dataSectionFive }
}

export default useData