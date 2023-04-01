import React, { useEffect } from 'react'
import API from '../../../API';
import useHomeStore from './store'

const useDataHome = () => {
  const {
    sosialisasi,
    pelatihan,
    pendampingan,
    map,
    setHomeData
  } = useHomeStore();

  const { data, error, isLoading } = API.home();

  if (error) {
    console.error("error:", error);
  }

  if (isLoading) {
    console.log("isLoading:", isLoading);
  }

  useEffect(() => {
    if (!!data) {
      setHomeData({
        sosialisasi: data.sosialisasi,
        pelatihan: data.pelatihan,
        pendampingan: data.pendampingan,
        map: data.map
      })
    }
  }, [data]);

  return {
    sosialisasi, pelatihan, pendampingan, map,
    error, isLoading
  }
}

export default useDataHome