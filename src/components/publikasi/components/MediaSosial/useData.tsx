import React, { useMemo } from 'react'
import usePublikasiStore from '../../state/store'

const useData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const mediaSosial = usePublikasiStore(state => state.mediaSosial);

  const dataMediaSosial = useMemo(() => {
    return mediaSosial[tahun];
  }, [tahun, mediaSosial]);

  return { ...dataMediaSosial }
}

export default useData