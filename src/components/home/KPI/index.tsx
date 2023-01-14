import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const KPI: React.FC = () => {
  return (
    <Box
      width="fit-content"
      border="1px solid #EAC170"
      borderRadius="10px"
    >
      <Box paddingY="18px">
        <Heading
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight={500}
          lineHeight="24px"
          textAlign="center"
          color="#FFFFFF"
        >
          PENDAMPINGAN
        </Heading>
      </Box>

      <Box paddingY="6px" borderY="1px solid #EAC170">
        <Text
          fontFamily="Montserrat"
          fontSize="20px"
          fontWeight={700}
          lineHeight="24px"
          textAlign="center"
          color="#EAC170"
        >
          2023
        </Text>
      </Box>

      <Flex
        direction="column"
        alignItems="center"
        rowGap="24px"
        padding="15px 30px"
      >
        <Box textAlign="center">
          <Text
            fontFamily="Montserrat"
            fontSize="20px"
            fontWeight={700}
            textAlign="center"
            lineHeight="20px"
          >
            6
          </Text>
          <Text
            fontFamily="Montserrat"
            fontSize="18px"
            fontWeight={400}
            textAlign="center"
            lineHeight="18px"
          >
            DPP
          </Text>
        </Box>


        <Flex>
          <Flex direction="column" justifyContent="center" width="110px">
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={700}
              lineHeight="20px"
            >
              65
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="18px"
              fontWeight={400}
              lineHeight="18px"
            >
              Desa
            </Text>
          </Flex>

          <Flex direction="column" justifyContent="center" width="110px" borderLeft="1px solid #FFFFFF" paddingLeft="10px">
            <Flex
              fontFamily="Montserrat"
              fontWeight={700}
              lineHeight="20px"
              color="#EAC170"
              alignItems="baseline"
              columnGap="4px"
            >
              <Text fontSize="20px">
                0
              </Text>
              <Text fontSize="12px">Desa</Text>
            </Flex>
            <Text
              fontFamily="Montserrat"
              fontSize="18px"
              fontWeight={400}
              lineHeight="18px"
            >
              Terealisasi
            </Text>
          </Flex>

          <Flex direction="column" justifyContent="center" width="50px" borderLeft="1px solid #FFFFFF" paddingLeft="10px">
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={700}
              lineHeight="20px"
              color="#EAC170"
            >
              0%
            </Text>
          </Flex>
        </Flex>

        <Flex>
          <Flex direction="column" justifyContent="center" width="110px">
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={700}
              lineHeight="20px"
            >
              65
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="18px"
              fontWeight={400}
              lineHeight="18px"
            >
              Kunjungan
            </Text>
          </Flex>

          <Flex direction="column" justifyContent="center" width="110px" borderLeft="1px solid #FFFFFF" paddingLeft="10px">
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={700}
              lineHeight="20px"
              color="#EAC170"
            >
              0
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="18px"
              fontWeight={400}
              lineHeight="18px"
            >
              Terealisasi
            </Text>
          </Flex>

          <Flex direction="column" justifyContent="center" width="50px" borderLeft="1px solid #FFFFFF" paddingLeft="10px">
            <Text
              fontFamily="Montserrat"
              fontSize="20px"
              fontWeight={700}
              lineHeight="20px"
              color="#EAC170"
            >
              0%
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default KPI