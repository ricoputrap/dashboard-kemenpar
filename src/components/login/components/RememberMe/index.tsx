import { Checkbox } from '@chakra-ui/react'
import React from 'react'
import { Label } from './index.styles'
import useLoginStore from '../../state/store'

const RememberMe: React.FC = () => {
  const rememberMe: boolean = useLoginStore(state => state.rememberMe);
  const toggleRememberMe = useLoginStore(state => state.toggleRememberMe);

  return (
    <Checkbox
      size='md'
      borderColor="#EAC170"
      checked={ rememberMe }
      onChange={ toggleRememberMe }
    >
      <Label>
        Remember me
      </Label>
    </Checkbox>
  )
}

export default RememberMe