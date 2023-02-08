import React from 'react'
import useLoginStore from '../state/store'

const useSubmit = () => {
  const handleSubmit = useLoginStore(state => state.handleSubmit);
  
  return handleSubmit;
}

export default useSubmit