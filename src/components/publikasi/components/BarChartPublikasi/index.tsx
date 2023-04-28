import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import SectionHeader from '../../../reusables/atoms/SectionHeader';
import BarChart from '../../../reusables/organisms/BarChart';
import { TBarData } from '../../../reusables/organisms/BarChart/index.types';
import ButtonSelengkapnya from '../ButtonSelengkapnya';
import useWidth from './useWidth';

interface Props {
  header?: string;
  title: string;
  dataset: TBarData[];
  labels: string[];
  url: string;
}

const BarChartPublikasi: React.FC<Props> = ({ header, title, dataset, labels, url }) => {
  const width: number = useWidth();

  return (
    <Box>
      {!!header && (
        <SectionHeader title={ header } />
      )}
      
      <Box>
        <Heading
          textAlign="center"
          fontFamily="Montserrat"
          fontSize="15px"
          fontWeight={600}
          lineHeight="20px"
          textTransform="uppercase"
        >
          { title }
        </Heading>
        <BarChart
          width={`${width}px`}
          height="250px"
          labels={ labels }
          dataset={ dataset }
        />
      </Box>

      <Box marginTop="12px">
        <ButtonSelengkapnya url={ url } />
      </Box>
    </Box>
  )
}

export default BarChartPublikasi