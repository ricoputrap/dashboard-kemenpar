import { Stack } from '@chakra-ui/react'
import React from 'react'
import BasePage from '../templates/BasePage'
import LastRow from './components/LastRow'
import MediaOnline from './components/MediaOnline'
import MediaSosial from './components/MediaSosial'
import useInitData from './hooks/useInitData'

const PublikasiView: React.FC = () => {
  useInitData();
  
  return (
    <BasePage id="page-sosialisasi">
      <Stack rowGap="80px">
        <MediaSosial />
        <MediaOnline />
        <LastRow />
      </Stack>
    </BasePage>
  )
}

export default PublikasiView