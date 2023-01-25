import React, { useMemo } from 'react'
import BasePage from '../components/templates/BasePage'
import { Box, Flex, Text } from '@chakra-ui/react'
import GroupedKPIPeserta from '../components/GroupedKPIPeserta'
import useDataSosialisasi from '../hooks/useDataSosialisasi'
import DoughnutChartPeserta from '../components/organisms/DoughnutChartPeserta'
import BarChart from '../components/organisms/BarChart'
import useWindowSize from '../hooks/useWindowSize'
import { TBarData } from '../components/organisms/BarChart/index.types'

let labels = ['pemandu wisata', 'home stay', 'cendra mata', 'kuliner', 'pengelola wisata', 'jasa transportasi', 'pelaku budaya'];
labels = labels.map(item => item.toUpperCase());

const dataset: TBarData[] = [
  {
    label: "Jumlah Usaha",
    data: [1500, 1900, 2500, 1000, 800, 1300, 2000],
    backgroundColor: "#FF3D00"
  }
]

let labelsNilai = ["toba", "byp", "bts", "lombok", "l.bajo", "wakatobi"];
labelsNilai = labelsNilai.map(item => item.toUpperCase());

const datasetNilai: TBarData[] = [
  {
    label: "pre-test",
    data: [1850, 950, 1000, 1900, 1000, 1000],
    backgroundColor: "#FF3D00"
  },
  {
    label: "post-test",
    data: [2800, 3500, 1900, 2900, 3400, 2000],
    backgroundColor: "#00FFFF"
  },
]

const labelsUsia = ["<20", "21-30", "31-40", "41-50", ">50"];
const datasetUsia: TBarData[] = [
  {
    label: "Jumlah",
    data: [900, 1400, 3000, 2700, 2000],
    backgroundColor: "#00FF38"
  }
]

let labelsPendidikan = ["sd", "sma", "sma smk", "d1", "d2", "d3", "s1"];
labelsPendidikan = labelsPendidikan.map(item => item.toUpperCase());

const datasetPendidikan: TBarData[] = [
  {
    label: "Jumlah",
    data: [1400, 2000, 2500, 3000, 2400, 2200, 1900],
    backgroundColor: "#00FFFF"
  }
]

const Sosialisasi: React.FC = () => {
  const { kpi, chartData, isLoading, error } = useDataSosialisasi();
  const { width } = useWindowSize();

  const barChartsWidth: number = useMemo(() => {
    const DOUGHNUT_KPI_WIDTH = 390;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const GAP = 90;
    const deductedWidth = DOUGHNUT_KPI_WIDTH + PAGE_PADDING_HORIZONTAL + GAP;
    const remainingSpace = width - deductedWidth;

    return remainingSpace;
  }, [width]);

  const barChartWidthHalf: number = useMemo(() => {
    const PADDING = 2 * 28;
    const GAP = 28;
    const deductedWidth = PADDING + GAP;
    
    const haflWidth = Math.ceil(barChartsWidth / 2);
    const width = haflWidth - deductedWidth - 32;

    return width;
  }, [barChartsWidth]);

  if (chartData.length == 0 || isLoading) return (
    <BasePage id="page-sosialisasi">
      <Text textAlign="center">LOADING...</Text>
    </BasePage>
  )

  return (
    <BasePage id="page-sosialisasi">
      <Flex direction="row" justifyContent="space-between">
        {/* Doughnut Chart & KPI Peserta */}
        <Flex direction="column" width="390px" rowGap="24px">
          {/* Donut Chart of Jenis Kelamin Peserta */}
          <DoughnutChartPeserta
            title="Peserta Sosialisasi"
            menData={ chartData[0] }
            womenData={ chartData[1] }
          />

          {/* KPI Jumlah Peserta per Location */}
          <GroupedKPIPeserta
            title="Jumlah Peserta Sosialisasi DPP"
            data={kpi}
          />
        </Flex>

        {/* Bar Charts */}
        <Flex direction="column" rowGap="40px" width={ `${barChartsWidth}px` }>
          <BarChart
            title="Grafik Kategori Usaha"
            width={ `${barChartsWidth}px` }
            height="150px"
            labels={ labels }
            dataset={ dataset }
          />

          <BarChart
            title="Grafik Nilai Pre Test & Post Test"
            width={ `${barChartsWidth}px` }
            height="150px"
            labels={ labelsNilai }
            dataset={ datasetNilai }
            showLegends
            showGrid
          />

          <Flex
            direction="column"
            rowGap="28px"
            padding="28px"
            border="1px solid #EAC170"
            borderRadius="10px"
          >

            {/* DROP DOWN */}
            <Flex columnGap="12px" alignItems="center">
              <Text fontSize="16px" fontWeight={500} lineHeight="20px">DPP</Text>
              <Box
                width="fit-content"
                background="#EAC170"
                borderRadius="5px"
                padding="4px 80px 4px 16px"
              >
                <Text fontSize="16px" fontWeight={500} lineHeight="20px" color="#000">
                  TOBA
                </Text>
              </Box>
            </Flex>

            {/* CHARTS */}
            <Flex columnGap="24px">
              <BarChart
                title="Grafik Usia DPP Toba"
                width={ `${barChartWidthHalf}px` }
                height="150px"
                labels={ labelsUsia }
                dataset={ datasetUsia }
              />

              <BarChart
                title="Grafik Pendidikan DPP TOBA"
                width={ `${barChartWidthHalf}px` }
                height="150px"
                labels={ labelsPendidikan }
                dataset={ datasetPendidikan }
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </BasePage>
  )
}

export default Sosialisasi