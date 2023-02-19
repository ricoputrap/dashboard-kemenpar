import React from 'react'
import useNarasumberStore from '../../state/store'

const useData = () => {
  const komposisi = useNarasumberStore(state => state.komposisi);
  return komposisi;
}

export default useData