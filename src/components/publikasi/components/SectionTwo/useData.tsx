import React, { useMemo } from 'react'
import usePublikasiStore from '../../state/store';

const useData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const sectionTwo = usePublikasiStore(state => state.sectionTwo);
  const dataSectionTwo = useMemo(() => {
    return sectionTwo[tahun];
  }, [tahun, sectionTwo]);

  return { ...dataSectionTwo }
}

export default useData