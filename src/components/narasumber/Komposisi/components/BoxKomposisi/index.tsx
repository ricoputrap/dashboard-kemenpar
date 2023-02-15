import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  name: string;
  value: number;
}

const BoxKomposisi: React.FC<Props> = ({ name, value }) => {
  return (
    <Box
      padding="18px 0px"
      width="225px"
      height="125px"
      border="1px solid #EAC170"
      borderRadius="20px"
      background="rgba(17, 38, 71, 0.85)"
    >
      <Flex alignItems="center">
        <Text
          fontSize="14px"
          fontWeight={600}
          lineHeight="15px"
          width="122px"
          textAlign="center"
        >
          { name }
        </Text>

        <Stack
          rowGap="10px"
          height="90px"
          width="122px"
          alignItems="center"
          justifyContent="center"
          borderLeft="1px solid #EAC170"
        >
          <Text
            color="#EAC170"
            fontSize="25px"
            fontWeight={600}
            lineHeight="30px"
            textAlign="center"
          >
            { value }
          </Text>
          <Text
            fontSize="15px"
            fontWeight={500}
            lineHeight="15px"
            textAlign="center"
            margin="0 !important"
          >
            Jumlah Narasumber
          </Text>
        </Stack>
      </Flex>
    </Box>
  )
}

export default BoxKomposisi