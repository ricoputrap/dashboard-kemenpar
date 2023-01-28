import React from 'react'
import useStore from '../state/store'

const useDataStatistikTotal = () => {
  const {
    totalDesa,
    totalBelum,
    totalSudah
  } = useStore(state => state.statistikTotal);

  return {
    totalDesa,
    totalBelum,
    totalSudah
  }
}

export default useDataStatistikTotal