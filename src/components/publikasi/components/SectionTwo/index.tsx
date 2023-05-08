import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ProfilMikroInfluencer from '../ProfilMikroInfluencer'
import StatisticBox from '../StatisticBox'
import useData from './useData'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar.svg"

const SectionTwo: React.FC = () => {
  const {
    profilMikroInfluencer,
    igLiveNgantri: { panji, grithe }
  } = useData();

  return (
    <Box id="section-two" width="100%">
      <Flex width="100%" columnGap="80px">
        <Flex width="100%" justifyContent="center">
          <ProfilMikroInfluencer
            data={ profilMikroInfluencer.data }
            url={ profilMikroInfluencer.url }
          />
        </Flex>

        <Flex width="100%" justifyContent="center">
          <Stack rowGap="27px">
            <Text
              color="#EAC170"
              fontSize="25px"
              fontWeight={600}
              marginBottom="12px"
            >
              IG LIVE NGANTRI
            </Text>

            <StatisticBox
              logo={ LogoKemenpar }
              title={ panji.id }
              titleSize="20px"
              url={ panji.url }
              follower={ panji.follower }
              jumlahKonten={ panji.jumlah_konten }
              reach={ panji.reach }
              engagement={ panji.engagement }
            />

            <StatisticBox
              logo={ LogoKemenpar }
              title={ grithe.id }
              titleSize="20px"
              url={ grithe.url }
              follower={ grithe.follower }
              jumlahKonten={ grithe.jumlah_konten }
              reach={ grithe.reach }
              engagement={ grithe.engagement }
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SectionTwo