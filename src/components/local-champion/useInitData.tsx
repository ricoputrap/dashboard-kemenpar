import React, { useEffect } from 'react'
import useChampionStore from './state/store'
import API from '../../API';

const useInitData = () => {
  const activeDPP: string = useChampionStore(state => state.activeDPP);

  const { data, error, isLoading } = API.localChampion(activeDPP);

  useEffect(() => {
    if (!data) return;

    console.log("===== data:", data)
  }, [data])
}

export default useInitData