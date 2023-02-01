import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { KPIPesertaType } from '../../../../types/sosialisasi.type';

const KPIPeserta: React.FC<KPIPesertaType> = ({
  lokasi,
  target,
  realisasi,
  laki,
  perempuan
}) => {
  const percent: number = useMemo(() => {
    return Math.ceil(realisasi * 100 / target);
  }, [target, realisasi]);

  return (
    <Box
      border="1px solid #EAC170"
      borderRadius="20px"
      fontFamily="Montserrat"
    >
      {/* title & percentage */}
      <Flex
        direction="column"
        alignItems="center"
        rowGap="10px"
        paddingY="12px"
      >
        <Text
          color="#EAC170"
          fontSize="12px"
          fontWeight={400}
          textTransform="uppercase"
        >
          { lokasi }
        </Text>
        <Text fontSize="25px" fontWeight={600}>
          {percent}%
        </Text>
      </Flex>

      {/* target & realisasi */}
      <Flex width="100%">
        <Box
          paddingY="8px"
          borderY="1px solid #EAC170"
          borderRight="1px solid #EAC170"
          textAlign="center"
          width="50%"
        >
          <Text
            fontSize="13px"
            fontWeight={300}
            letterSpacing="-0.05em"
            lineHeight="16px"
          >
            Target
          </Text>
          <Text
            fontSize="13px"
            fontWeight={600}
            letterSpacing="-0.05em"
            lineHeight="16px"
          >
            { target }
          </Text>
        </Box>
        <Box
          paddingY="8px"
          borderY="1px solid #EAC170"
          textAlign="center"
          width="50%"
        >
          <Text
            fontSize="13px"
            fontWeight={300}
            letterSpacing="-0.05em"
            lineHeight="16px"
          >
            Realisasi
          </Text>
          <Text
            fontSize="13px"
            fontWeight={600}
            letterSpacing="-0.05em"
            lineHeight="16px"
          >
            { realisasi }
          </Text>
        </Box>
      </Flex>
      
      {/* jenis kelamin */}
      <Flex
        direction="column"
        alignItems="start"
        padding="12px 18px 18px 18px"
        rowGap="8px"
      >
        {/* laki-laki */}
        <Flex columnGap="4px" alignItems="center">
          <Box width="12px" height="12px" background="#00FFFF"></Box>
          <Flex direction="column" alignItems="start">
            <Text
              fontSize="12px"
              fontWeight={800}
              lineHeight="14px"
              letterSpacing="10%"
            >
              { laki }
            </Text>
            <Text
              color="#EAC170"
              fontSize="8px"
              fontWeight={500}
              lineHeight="10px"
            >
              LAKI-LAKI
            </Text>
          </Flex>
        </Flex>

        {/* perempuan */}
        <Flex columnGap="4px" alignItems="center">
          <Box width="12px" height="12px" background="#FF1F00"></Box>
          <Flex
            direction="column"
            alignItems="start"
          >
            <Text
              fontSize="12px"
              fontWeight={800}
              lineHeight="14px"
              letterSpacing="10%"
            >
              { perempuan }
            </Text>
            <Text
              color="#EAC170"
              fontSize="8px"
              fontWeight={500}
              lineHeight="10px"
            >
              PEREMPUAN
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default KPIPeserta