import React, { useMemo } from 'react'
import BarChart from '../../../reusables/organisms/BarChart'
import useData from './useData';
import { Box, Text } from '@chakra-ui/react';
import Dropdown from '../../../reusables/atoms/Dropdown';
import { TDropdownItem } from '../../../../types/utils.type';
import useKategoriUsahaStore from '../../state/kategoriUsaha/store';

interface Props {
  width: number;
}

const GrafikKategoriUsaha: React.FC<Props> = ({ width }) => {
  const { labels, dataset } = useData();
  const dpp = useKategoriUsahaStore(state => state.dpp);
  const setDPP = useKategoriUsahaStore(state => state.setDPP);

  const options: TDropdownItem[] = useMemo(() => [
    { label: "toba", value: "toba" },
    { label: "byp", value: "byp" },
    { label: "bts", value: "bts" },
    { label: "lombok", value: "lombok" },
    { label: "labuan bajo", value: "l.bajo" },
    { label: "wakatobi", value: "wakatobi" }
  ], []);

  const handleChange = (dpp: string) => {
    setDPP(dpp);
  }

  return (
    <Box position="relative">
      <Box
        width="fit-content"
        position="absolute"
        right={0}
        top="8px"
        display="flex"
        alignItems="center"
        columnGap="12px"
      >
        <Text
          fontSize="16px"
          fontWeight={500}
        >
          DPP
        </Text>
        <Dropdown
          options={ options }
          activeItem={ dpp }
          onChange={ handleChange }
        />
      </Box>
      <BarChart
        title="Grafik Kategori Usaha"
        width={`${width}px`}
        height="150px"
        labels={ labels }
        dataset={ dataset }
      />
    </Box>
  )
}

export default GrafikKategoriUsaha