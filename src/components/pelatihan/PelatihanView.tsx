import React from 'react'
import useInitData from './useInitData'
import BasePage from '../templates/BasePage';
import { Flex } from '@chakra-ui/react';
import StatistikJumlahPeserta from './StatistikJumlahPeserta';

const PelatihanView: React.FC = () => {
  useInitData();

  return (
    <BasePage id="page-pelatihan">
      <Flex direction="row" justifyContent="space-between">
        <StatistikJumlahPeserta />
      </Flex>
    </BasePage>
  )
}

export default PelatihanView