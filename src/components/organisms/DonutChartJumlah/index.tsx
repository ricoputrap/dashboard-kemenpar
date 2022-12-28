import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import chartLineImg from "../../../assets/lines/chart-line.svg";
import DonutChart from '../DonutChart';

interface Props {
  title: string;
}

const DonutChartJumlah: React.FC<Props> = ({ title }) => {
  return (
    <Flex width="100%" direction="column" rowGap="10px">
      <Box marginBottom="12px">
        <Image src={chartLineImg} />
      </Box>

      <Heading
        fontFamily="Montserrat"
        fontSize="18px"
        fontWeight={400}
        textAlign="center"
      >
        { title }
      </Heading>

      <Flex columnGap="14px" alignSelf="center">
        <DonutChart
          name="PESERTA"
          value="6.897"
          color="linear-gradient(180.31deg, #72EA70 37.14%, rgba(114, 234, 112, 0.5) 99.73%)"
        />
        <DonutChart
          name="DESA"
          value="536"
          color="linear-gradient(180.31deg, #EA7070 37.14%, rgba(234, 112, 112, 0.5) 99.73%)"
        />
      </Flex>
      <DonutChart
        name="KELAS"
        value="58"
        color="linear-gradient(180.31deg, #70D4EA 37.14%, rgba(112, 212, 234, 0.5) 99.73%)"
      />
    </Flex>
  )
}

export default DonutChartJumlah