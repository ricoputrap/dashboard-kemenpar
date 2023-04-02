import { Divider } from '@chakra-ui/react';
import React, { useMemo } from 'react'
import { Container, Title } from './index.styles';
import { TDataSetahun } from '../index.types';
import DataSetahun from './DataSetahun';
import DataTotal from './DataTotal';

interface Props {
  title: string;
  data: TDataSetahun[];
}

const PopoverArea: React.FC<Props> = ({ title, data }) => {
  const jumlahTotalDesa = useMemo(() => {
    const jumlah: number = data.reduce((total, item) => total + parseInt(item.jumlah + ""), 0);
    return jumlah;
  }, [data]);

  return (
    <Container>
      <Title>{ title }</Title>

      <Divider borderColor="#112647" />

      {data.map(item => (
        <DataSetahun
          key={ item.tahun }
          tahun={ item.tahun }
          jumlah={ item.jumlah }
        />
      ))}

      <Divider borderColor="#112647" />

      <DataTotal total={ jumlahTotalDesa } />
    </Container>
  )
}

export default PopoverArea