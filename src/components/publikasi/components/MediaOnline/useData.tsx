import React, { useMemo } from 'react'
import usePublikasiStore from '../../state/store'

const useData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const mediaOnline = usePublikasiStore(state => state.mediaOnline);
  const dataMediaOnline = useMemo(() => {
    return mediaOnline[tahun];
  }, [tahun, mediaOnline]);

  return { ...dataMediaOnline }
}

export default useData