import { Stack } from '@chakra-ui/react'
import React from 'react'
import BasePage from '../templates/BasePage'
import LastRow from './components/LastRow'
import MediaOnline from './components/MediaOnline'
import MediaSosial from './components/MediaSosial'
import SectionThree from './components/SectionThree'
import SectionTwo from './components/SectionTwo'
import YearlyFilter from './components/YearlyFilter'
import useInitData from './hooks/useInitData'

const PublikasiView: React.FC = () => {
  useInitData();
  
  return (
    <BasePage id="page-sosialisasi">
      <YearlyFilter />
      <Stack rowGap="80px" paddingX="56px">
        <MediaSosial />
        <SectionTwo />
        <SectionThree />
        <MediaOnline />
        <LastRow />
      </Stack>
    </BasePage>
  )
}

export default PublikasiView