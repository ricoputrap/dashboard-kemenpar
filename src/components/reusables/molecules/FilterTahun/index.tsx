import React from 'react'
import FilterItem from './FilterItem';
import { Container } from './index.styles';

interface Props {
  tahun: number;
  daftarTahun: number[];
  setTahun: (tahun: number) => void;
}

const FilterTahun: React.FC<Props> = ({ tahun, daftarTahun, setTahun }) => {
  return (
    <Container>
      {daftarTahun.map(item => (
        <FilterItem
          key={ item }
          value={ item }
          activeTahun={ tahun }
          setTahun={ setTahun }
        />
      ))}
    </Container>
  )
}

export default FilterTahun