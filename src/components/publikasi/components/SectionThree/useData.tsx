import React, { useMemo } from 'react'
import usePublikasiStore from '../../state/store'

const useData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const sectionThree = usePublikasiStore(state => state.sectionThree);
  const dataSectionThree = useMemo(() => {
    return sectionThree[tahun]
  }, [tahun, sectionThree]);

  return { ...dataSectionThree }
}

export default useData