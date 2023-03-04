import React from 'react'
import useData from './useData'
import ChartLine from "../../../../../assets/lines/chart-line.svg"
import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import DoughnutChartContainer from '../../../../reusables/organisms/DoughnutChart/DoughnutChartContainer'
import LegendItem from '../../../../reusables/organisms/DoughnutChartPeserta/LegendItem'

const StatistikChart: React.FC = () => {
  const { menData, womenData } = useData();

  return (
    <Stack rowGap="14px">
      <Image
        src={ ChartLine }
        width="100%"
      />

      <Flex>
        <Stack
          width="193px"
          borderRight="1px solid #EAC170"
        >
          <Stack
            rowGap="12px"
            alignItems="center"
            padding="8px"
            borderBottom="1px solid #EAC170"
          >
            <DoughnutChartContainer
              data={[menData, womenData]}
              label="Jumlah Peserta"
              width={108}
              fontSize={20}
              thickness={40}
            />
            <Text
              fontSize="15px"
              fontWeight={500}
              textTransform="uppercase"
              textAlign="center"
            >
              Peserta Pelatihan A&B
            </Text>
          </Stack>

          {/* Legends */}
          <Stack rowGap="4px" padding="4px 16px">
            <Text
              fontSize="15px"
              fontWeight={500}
              textTransform="uppercase"
            >
              Jenis Kelamin
            </Text>

            <LegendItem
              value={ menData.value }
              percent={ menData.percent }
              label={ menData.label }
              color={ menData.color }
            />

            <LegendItem
              value={ womenData.value }
              percent={ womenData.percent }
              label={ womenData.label }
              color={ womenData.color }
            />
          </Stack>
        </Stack>

        <Stack width="193px">
          <Stack
            rowGap="12px"
            alignItems="center"
            padding="8px"
            borderBottom="1px solid #EAC170"
          >
            <DoughnutChartContainer
              data={[menData, womenData]}
              label="Jumlah Peserta"
              width={108}
              fontSize={20}
              thickness={40}
            />
            <Text
              fontSize="15px"
              fontWeight={500}
              textTransform="uppercase"
              textAlign="center"
            >
              Peserta Pelatihan C
            </Text>
          </Stack>

          {/* Legends */}
          <Stack rowGap="4px" padding="4px 16px">
            <Text
              fontSize="15px"
              fontWeight={500}
              textTransform="uppercase"
            >
              Jenis Kelamin
            </Text>

            <LegendItem
              value={ menData.value }
              percent={ menData.percent }
              label={ menData.label }
              color={ menData.color }
            />

            <LegendItem
              value={ womenData.value }
              percent={ womenData.percent }
              label={ womenData.label }
              color={ womenData.color }
            />
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default StatistikChart