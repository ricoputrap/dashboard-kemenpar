import React, { useEffect } from 'react'
import { TResponse } from '../../../API/publikasi'
import usePublikasiStore from '../state/store'
import computeDataMediaOnline from '../utils/computeData/media-online';

const useInitDataMediaOnline = (data?: TResponse) => {
  const tahun = usePublikasiStore(state => state.tahun);
  const setDataMediaOnline = usePublikasiStore(state => state.setDataMediaOnline);

  useEffect(() => {
    if (!data) return;

    const { media_online } = data.data.data;
    const dataMediaOnline = computeDataMediaOnline(media_online);
    setDataMediaOnline(dataMediaOnline);
  }, [data, tahun]);
}

export default useInitDataMediaOnline