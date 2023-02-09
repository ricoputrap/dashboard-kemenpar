import React from 'react'
import TextInput from '../../reusables/atoms/TextInput'
import useLoginStore from '../state/store'

const Form: React.FC = () => {
  const username = useLoginStore(state => state.username);
  const password = useLoginStore(state => state.password);
  const setUsername = useLoginStore(state => state.setUsername);
  const setPassword = useLoginStore(state => state.setPassword);

  return (
    <>
      <TextInput
        label="Username"
        value={ username }
        handleChange={ setUsername }
      />

      <TextInput
        label="Password"
        value={ password }
        handleChange={ setPassword }
        isPassword
      />
    </>
  )
}

export default Form