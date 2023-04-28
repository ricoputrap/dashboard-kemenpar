import { Box, Heading } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import useWindowSize from '../../../../../hooks/useWindowSize';
import SectionHeader from '../../../../reusables/atoms/SectionHeader'
import BarChart from '../../../../reusables/organisms/BarChart';
import { TBarData } from '../../../../reusables/organisms/BarChart/index.types';
import ButtonSelengkapnya from '../../ButtonSelengkapnya';

const URL = "https://drive.google.com/file/d/11o9qZFxBurBgjZ6-0i1hDWWAIYusyzSh/view?usp=sharing";

const MediaLuarRuang: React.FC = () => {
  const dataset: TBarData[] = useMemo(() => [
    { label: "Jumlah ", data: [42, 100, 28, 34, 13, 20], backgroundColor: "#EAC170" },
  ], []);

  const labels: string[] = useMemo(() => {
    const LABELS = ["toba", "byp", "bts", "lombok", "labuan bajo", "wakatobi"];
    return LABELS.map((label: string) => label.toUpperCase());
  }, []);

  const { width } = useWindowSize();
  const barChartsWidth: number = useMemo(() => {
    if (width == 0) {
      const WIDTH = 630;
      return WIDTH;
    }
    const GAP = 44;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const contentWidth = width - PAGE_PADDING_HORIZONTAL - GAP;
    return contentWidth / 2;
  }, [width]);

  return (
    <Box>
      <SectionHeader title="Media Luar Ruang" />

      <Box>
        <Heading
          textAlign="center"
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight={600}
          lineHeight="20px"
          textTransform="uppercase"
        >
          MEDIA LUAR RUANG<br />
          6 DESTINASI PARIWISATA PRIORITAS
        </Heading>
        <BarChart
          width={`${barChartsWidth}px`}
          height="250px"
          labels={ labels }
          dataset={ dataset }
        />
      </Box>

      <ButtonSelengkapnya url={ URL } />
    </Box>
  )
}

export default MediaLuarRuang