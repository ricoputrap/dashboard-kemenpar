import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar.svg"
import LogoWonderful from "../../../../assets/logo/8-publikasi-wonderful.svg"
import ChartLine from "../../../../assets/lines/chart-line.svg"
import StatisticBox from '../StatisticBox'
import ProfilMikroInfluencer from '../ProfilMikroInfluencer'
import StackedBarChart from '../../../reusables/organisms/StackedBarChart'

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
          </Flex>
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
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
          </Flex>

          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
          >
            <StackedBarChart
              title={(
                <>
                  JUMLAH PEMBERITAAN<br/>
                  6 DESTINASI PARIWISATA PRIORITAS
                </>
              )}
              labels={["TOBA", "BYP", "BTS", "BAJO", "LOMBOK", "WAKATOBI"]}
              datasets={[
                {
                  label: "Follower",
                  data: [383400, 305100, 313700, 701700, 316300, 226400],
                  backgroundColor: "#00FFFF"
                },
                {
                  label: "Reach",
                  data: [64089, 29659, 22550, 29886, 177972, 38521],
                  backgroundColor: "#0085FF"
                },
                {
                  label: "Engagement",
                  data: [6929, 7658, 7087, 4032, 10974, 3446],
                  backgroundColor: "#7A4DFC"
                }
              ]}
              width="630px"
              height="250px"
            />
          </Flex>
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