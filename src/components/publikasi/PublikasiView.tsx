import React from 'react'
import BasePage from '../templates/BasePage'
import { Box, Circle, Flex, Image, Stack, Text } from '@chakra-ui/react'
import ChartLine from "../../assets/lines/chart-line.svg"

type TDoughnutChartItem = {
  value: number;
  percent: number;
  label: string;
  color: string;
}

const daftarBaliho: string[] = [
  "Danau Toba", "BYP", "BTS",
  "Lombok", "Labuan Bajo", "Wakatobi"
]

const PublikasiView: React.FC = () => {
  return (
    <BasePage id="page-sosialisasi">
      <Flex justifyContent="space-between">

        {/* Column I */}
        <Stack rowGap="24px" width="392px">

          {/* Row I: Media Luar Ruang */}
          <Box>
            <Image src={ ChartLine } />
            <Text
              fontSize="20px"
              fontWeight={600}
              lineHeight="20px"
              textTransform="uppercase"
              marginTop="12px"
            >
              Media
            </Text>

            <Flex columnGap="12px" marginTop="8px">
              <Circle size="154px" bg='rgba(234, 193, 112, 0.5)'>
                <Circle size="122px" bg="#112647">
                  <Text fontSize="20px" fontWeight={600} color="#EAC170" textAlign="center">
                    LUAR RUANG
                  </Text>
                </Circle>
              </Circle>

              <Box>
                <Text fontSize="18px" fontWeight={600}>
                  Baliho di 6 DPP:
                </Text>
                <Stack rowGap="4px" marginTop="8px">
                  {daftarBaliho.map((item, index) => (
                    <Text
                      key={ index }
                      fontSize="15px"
                      fontWeight={400}
                      lineHeight="16px"
                      marginTop="0 !important"
                    >
                      { index }. { item }
                    </Text>
                  ))}
                </Stack>
              </Box>
            </Flex>
          </Box>

          {/* Row II: Website */}
          <Stack rowGap="8px">
            <Image src={ ChartLine } />
            <Text
              fontSize="20px"
              fontWeight={600}
              color="#EAC170"
              textTransform="uppercase"
              marginTop="0 !important"
            >
              Website
            </Text>
            <Text
              fontSize="15px"
              fontWeight={400}
              lineHeight="15px"
              marginTop="0 !important"
            >
              16 ARTIKEL (FEATURES) DI
              <br/>www.indonesia.travel
            </Text>
          </Stack>
          <Box>
            <Image src={ ChartLine } />
          </Box>
        </Stack>

        {/* Column II */}
        <Stack rowGap="24px" width="392px">
          <Box>
            <Image src={ ChartLine } />
          </Box>
          <Box>
            <Image src={ ChartLine } />
          </Box>
        </Stack>

        {/* Column III */}
        <Stack rowGap="24px" width="392px">
          <Box>
            <Image src={ ChartLine } />
          </Box>
          <Box>
            <Image src={ ChartLine } />
          </Box>
        </Stack>
      </Flex>
    </BasePage>
  )
}

export default PublikasiView