import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfilMikroInfluencer from './ProfilMikroInfluencer'
import useData from './useData'
import IGLiveNgantri from './IGLiveNgantri'

const SectionTwo: React.FC = () => {
  const {
    profilMikroInfluencer,
    igLiveNgantri
  } = useData();

  return (
    <Box id="section-two" width="100%" minHeight="576px">
      <Flex width="100%" columnGap="80px">
        <Flex width="100%" justifyContent="center">
          <ProfilMikroInfluencer
            data={ profilMikroInfluencer.data }
            url={ profilMikroInfluencer.url }
          />
        </Flex>

        <Flex width="100%" justifyContent="center">
          <IGLiveNgantri
            data={ igLiveNgantri }
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default SectionTwo