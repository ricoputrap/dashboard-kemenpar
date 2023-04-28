import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import useWindowSize from '../../../../hooks/useWindowSize'
import BarChart from '../../../reusables/organisms/BarChart'

const dataset = [
  { label: "Media", data: [17, 9, 4, 14, 6, 5], backgroundColor: "#EAC170" },
]

const ChartJumlahPemberitaan: React.FC = () => {
  const { width } = useWindowSize();
  const barChartsWidth: number = useMemo(() => {
    if (width == 0) {
      const WIDTH = 630;
      return WIDTH;
    }
    const GAP = 68;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const contentWidth = width - PAGE_PADDING_HORIZONTAL - GAP;
    return contentWidth / 2;
  }, [width]);

  return (
    <Box >
      <Heading
        textAlign="center"
        fontFamily="Montserrat"
        fontSize="15px"
        fontWeight={600}
        lineHeight="20px"
        textTransform="uppercase"
      >
        Jumlah Pemberitaan<br />
        6 Destinasi Pariwisata Prioritas
      </Heading>
      <BarChart
        width={`${barChartsWidth}px`}
        height="250px"
        labels={["toba", "byp", "bts", "lombok", "labuan bajo", "wakatobi"]}
        dataset={ dataset }
      />

      <Button
        background="#EAC170"
        color="#112647"
        as="a"
        href="https://drive.google.com/file/d/1G1vcywG8kHbyOLKCYbYnLNTAJ3kY0Xic/view?usp=share_link"
        target="_blank"
      >
        SELENGKAPNYA
      </Button>
    </Box>
  )
}

export default ChartJumlahPemberitaan