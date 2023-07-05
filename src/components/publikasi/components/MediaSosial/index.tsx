import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar-new.svg"
import LogoWonderful from "../../../../assets/logo/8-publikasi-wonderful-new.svg"
import ChartLine from "../../../../assets/lines/chart-line.svg"
import StatisticBox from '../StatisticBox'
import ChartInfluencerVisit from './ChartInfluencerVisit'
import useData from './useData'

const MediaSosial: React.FC = () => {
  const { data, influencer } = useData();

  return (
    <Box id="section-one" width="100%">
      <Box marginBottom="40px">
        <Text
          color="#EAC170"
          fontSize="22px"
          fontWeight={600}
          marginBottom="12px"
        >
          MEDIA SOSIAL
        </Text>
        <Image src={ ChartLine } width="312px" />
      </Box>

      <Flex columnGap="132px">
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
              title={ data[0]?.id || "" }
              titleSize="21px"
              url={ data[0]?.url || "" }
              follower={ data[0]?.follower || "0" }
              jumlahKonten={ data[0]?.jumlah_konten || "0" }
              engagement={ data[0]?.engagement || "0" }
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
              title={ data[1]?.id || "" }
              titleSize="21px"
              url={ data[1]?.url || "" }
              follower={ data[1]?.follower || "0" }
              jumlahKonten={ data[1]?.jumlah_konten || "0" }
              engagement={ data[1]?.engagement || "0" }
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
              title={ data[2]?.id || "" }
              titleSize="21px"
              url={ data[2]?.url || "" }
              follower={ data[2]?.follower || "0" }
              jumlahKonten={ data[2]?.jumlah_konten || "0" }
              engagement={ data[2]?.engagement || "0" }
            />
          </Flex>

          <Flex
            width="100%"
            maxWidth="507px"
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