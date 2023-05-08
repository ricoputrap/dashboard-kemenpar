import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar.svg"
import LogoWonderful from "../../../../assets/logo/8-publikasi-wonderful.svg"
import ChartLine from "../../../../assets/lines/chart-line.svg"
import StatisticBox from '../StatisticBox'
import ChartInfluencerVisit from './ChartInfluencerVisit'
import useData from './useData'
import SectionTwo from '../SectionTwo'

const MediaSosial: React.FC = () => {
  const { kemenpar, kampanye, pesona, influencer } = useData();

  return (
    <Box>
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

      {/* TODO: Refactor using Grid */}
      <Flex columnGap="80px">
        <Stack width="100%" rowGap="110px" alignItems="center">
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StatisticBox
              logo={LogoKemenpar}
              title={ kemenpar.id }
              titleSize="25px"
              url={ kemenpar.url }
              follower={ kemenpar.follower }
              jumlahKonten={ kemenpar.jumlah_konten }
              reach={ kemenpar.reach }
              engagement={ kemenpar.engagement }
            />
          </Flex>
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StatisticBox
              logo={LogoWonderful}
              title={ pesona.id }
              titleSize="25px"
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
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StatisticBox
              logo={LogoWonderful}
              title={ kampanye.id }
              titleSize="22px"
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

      <Flex columnGap="40px" marginTop="80px">
        <SectionTwo />
      </Flex>

      <Flex columnGap="80px" marginTop="80px">
        {/* PODCAST WONDERFUL INDONESIA */}
        <Stack rowGap="27px">
          <Text
            color="#EAC170"
            fontSize="25px"
            fontWeight={600}
            marginBottom="12px"
          >
            PODCAST WONDERFUL INDONESIA
          </Text>

          <StatisticBox
            logo={ LogoKemenpar }
            title="PENJAGA PESONA WAKATOBI"
            titleSize="20px"
            url="https://www.instagram.com/p/CLL0Z8YJ8Z-/"
            statistics={[
              { label: "follower", value: "968K" },
              { label: "jumlah konten", value: "31" },
              { label: "reach", value: "0" },
              { label: "engagement", value: "0.23%" },
            ]}
          />

          <StatisticBox
            logo={ LogoKemenpar }
            title="MAKIN SERU WISATA DI LABUAN BAJO"
            titleSize="20px"
            url="https://www.instagram.com/p/CLL0Z8YJ8Z-/"
            statistics={[
              { label: "follower", value: "968K" },
              { label: "jumlah konten", value: "31" },
              { label: "reach", value: "0" },
              { label: "engagement", value: "0.23%" },
            ]}
          />
        </Stack>

        {/* USER GENERATED CONTENT */}
        <Stack rowGap="27px">
          <Text
            color="#EAC170"
            fontSize="25px"
            fontWeight={600}
            marginBottom="12px"
          >
            USER GENERATED CONTENT
          </Text>

          <StatisticBox
            logo={ LogoKemenpar }
            title="KSW GIVEAWAY"
            titleSize="20px"
            url="https://www.instagram.com/p/CLL0Z8YJ8Z-/"
            statistics={[
              { label: "follower", value: "968K" },
              { label: "jumlah konten", value: "31" },
              { label: "reach", value: "0" },
              { label: "engagement", value: "0.23%" },
            ]}
          />

          <StatisticBox
            logo={ LogoKemenpar }
            title="KSW GIVEAWAY"
            titleSize="20px"
            url="https://www.instagram.com/p/CLL0Z8YJ8Z-/"
            statistics={[
              { label: "follower", value: "968K" },
              { label: "jumlah konten", value: "31" },
              { label: "reach", value: "0" },
              { label: "engagement", value: "0.23%" },
            ]}
          />
        </Stack>
      </Flex>
    </Box>
  )
}

export default MediaSosial