import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Ring from '../Ring'
import ChartLine from "../../../../assets/lines/chart-line.svg"

const daftarBaliho: string[] = [
  "Danau Toba", "BYP", "BTS",
  "Lombok", "Labuan Bajo", "Wakatobi"
]

const MediaLuarRuang: React.FC = () => {
  return (
    <Box width="100%">
      <Image src={ ChartLine } width="100%" />
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
        <Ring>
          <Text
            fontSize="20px"
            fontWeight={600}
            color="#EAC170"
            textAlign="center"
          >
            LUAR RUANG
          </Text>
        </Ring>

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
  )
}

export default MediaLuarRuang