import React, { useEffect, useMemo } from 'react'
import API from '../../../API';
import { TMediaSosial } from '../state/index.types';
import { initialDataMediaSosial } from '../state/initialData';
import usePublikasiStore from '../state/store'
import computeMediaSosial from '../utils/computeData/media-sosial';
import useInitDataSectionTwo from './useInitDataSectionTwo';

const useInitData = () => {
  const tahun = usePublikasiStore(state => state.tahun);
  const setDataMediaSosial = usePublikasiStore(state => state.setDataMediaSosial);
  
  const { data, error, isLoading } = API.publikasi(tahun);
  useInitDataSectionTwo(data);

  const dataMediaSosial: TMediaSosial = useMemo(() => {
    if (!data) {
      return initialDataMediaSosial;
    }
    const { media_sosial } = data.data.data;
    return computeMediaSosial(media_sosial);
  }, [data, tahun]);

  useEffect(() => {
    setDataMediaSosial(dataMediaSosial, tahun);
  }, [dataMediaSosial]);
}

export default useInitData