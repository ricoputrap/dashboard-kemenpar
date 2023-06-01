import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar.svg"
import LogoWonderful from "../../../../assets/logo/8-publikasi-wonderful.svg"
import ChartLine from "../../../../assets/lines/chart-line.svg"
import StatisticBox from '../StatisticBox'
import ChartInfluencerVisit from './ChartInfluencerVisit'
import useData from './useData'

const MediaSosial: React.FC = () => {
  const { kemenpar, kampanye, pesona, influencer } = useData();

  return (
    <Box id="section-one" width="100%">
      <Box marginBottom="40px">
        <Text
          color="#EAC170"
          fontSize="25px"
          fontWeight={600}
          marginBottom="12px"
        >
          MEDIA SOSIAL
        </Text>
        <Image src={ ChartLine } width="312px" />
      </Box>

      <Flex columnGap="80px">
        <Stack width="100%" rowGap="110px" alignItems="center">
          <Flex
            width="100%"
            maxWidth="507px"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StatisticBox
              logo={LogoKemenpar}
              title={ kemenpar.id }
              titleSize="21px"
              url={ kemenpar.url }
              follower={ kemenpar.follower }
              jumlahKonten={ kemenpar.jumlah_konten }
              reach={ kemenpar.reach }
              engagement={ kemenpar.engagement }
            />
          </Flex>
          <Flex
            width="100%"
            maxWidth="507px"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StatisticBox
              logo={LogoWonderful}
              title={ pesona.id }
              titleSize="21px"
              url={ pesona.url }
              follower={ pesona.follower }
              jumlahKonten={ pesona.jumlah_konten }
              reach={ pesona.reach }
              engagement={ pesona.engagement }
            />
          </Flex>
        </Stack>

        <Stack width="100%" rowGap="52px" alignItems="center">
          <Flex
            width="100%"
            maxWidth="507px"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StatisticBox
              logo={LogoWonderful}
              title={ kampanye.id }
              titleSize="16px"
              url={ kampanye.url }
              follower={ kampanye.follower }
              jumlahKonten={ kampanye.jumlah_konten }
              reach={ kampanye.reach }
              engagement={ kampanye.engagement }
            />
          </Flex>

          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <ChartInfluencerVisit data={ influencer } />
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}

export default MediaSosial