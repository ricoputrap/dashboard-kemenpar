import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"

interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <Box marginBottom="32px">
      <Text
        color="#EAC170"
        fontSize="25px"
        fontWeight={600}
        marginBottom="12px"
        textTransform="uppercase"
      >
        { title }
      </Text>
      <Image src={ ChartLine } width="312px" />
    </Box>
  )
}

export default SectionHeader