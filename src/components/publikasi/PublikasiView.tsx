import { Stack } from '@chakra-ui/react'
import React from 'react'
import BasePage from '../templates/BasePage'
import LastRow from './components/LastRow'
import MediaOnline from './components/MediaOnline'
import MediaSosial from './components/MediaSosial'

const PublikasiView: React.FC = () => {
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