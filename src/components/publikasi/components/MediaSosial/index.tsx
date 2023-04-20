import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar.svg"
import LogoWonderful from "../../../../assets/logo/8-publikasi-wonderful.svg"
import ChartLine from "../../../../assets/lines/chart-line.svg"
import StatisticBox from '../StatisticBox'
import ProfilMikroInfluencer from '../ProfilMikroInfluencer'

const MediaSosial: React.FC = () => {
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

      <Flex columnGap="80px">
        <Stack width="100%" rowGap="110px" alignItems="center">
          <StatisticBox
            logo={LogoKemenpar}
            title="@kemenparekraf.ri"
            titleSize="25px"
            url="https://drive.google.com/file/d/1duVVOLufFmWHVd2BSUBdM5_wbDa2Goyp/view?usp=share_link"
            statistics={[
              { label: "follower", value: "968K" },
              { label: "jumlah konten", value: "31" },
              { label: "reach", value: "0" },
              { label: "engagement", value: "0.23%" },
            ]}
          />
          <StatisticBox
            logo={LogoWonderful}
            title="@pesona.indonesia"
            titleSize="25px"
            url="https://www.instagram.com/wonderfulindonesia/"
            statistics={[
              { label: "follower", value: "18.7k" },
              { label: "jumlah konten", value: "1.9k" },
              { label: "reach", value: "1.5k" },
              { label: "engagement", value: "1.6k" },
            ]}
          />
        </Stack>

        <Stack width="100%" rowGap="52px" alignItems="center">
          <StatisticBox
            logo={LogoWonderful}
            title="@KampanyeSadarWisata"
            titleSize="20px"
            url="https://drive.google.com/file/d/1duVVOLufFmWHVd2BSUBdM5_wbDa2Goyp/view?usp=share_link"
            statistics={[
              { label: "follower", value: "14.2k" },
              { label: "jumlah konten", value: "40" },
              { label: "reach", value: "0" },
              { label: "engagement", value: "4.50%" },
            ]}
          />
        </Stack>
      </Flex>

      <Flex columnGap="40px" marginTop="80px">
        {/* PROFIL MIKRO INFLUENCER */}
        <ProfilMikroInfluencer />

        {/* IG LIVE NGANTRI */}
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
            title="IG LIVE PANJI PETUALANG"
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
            title="IG LIVE GRITHE AGATHA"
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