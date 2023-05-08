import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import StatisticBox from '../StatisticBox'
import LogoKemenpar from "../../../../assets/logo/7-publikasi-kemenpar.svg"
import useData from './useData'

const SectionThree: React.FC = () => {
  const { podcastWonderfulIndonesia, userGeneratedContent } = useData();

  return (
    <Box id="section-three" width="100%">
      <Flex width="100%" columnGap="80px">
        <Flex width="100%" justifyContent="center">
          <Stack rowGap="27px">
            <Text
              color="#EAC170"
              fontSize="25px"
              fontWeight={600}
              marginBottom="12px"
            >
              PODCAST WONDERFUL INDONESIA
            </Text>

            {podcastWonderfulIndonesia.map((podcast) => (
              <StatisticBox
                key={ podcast.id }
                logo={ LogoKemenpar }
                title={ podcast.id }
                titleSize="20px"
                url={ podcast.url }
                follower={ podcast.follower }
                jumlahKonten={ podcast.jumlah_konten }
                reach={ podcast.reach }
                engagement={ podcast.engagement }
              />
            ))}
          </Stack>
        </Flex>

        <Flex width="100%" justifyContent="center">
          <Stack rowGap="27px">
            <Text
              color="#EAC170"
              fontSize="25px"
              fontWeight={600}
              marginBottom="12px"
            >
              USER GENERATED CONTENT
            </Text>

            {userGeneratedContent.map((content) => (
              <StatisticBox
                key={ content.id }
                logo={ LogoKemenpar }
                title={ content.id }
                titleSize="20px"
                url={ content.url }
                follower={ content.follower }
                jumlahKonten={ content.jumlah_konten }
                reach={ content.reach }
                engagement={ content.engagement }
              />
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default SectionThree