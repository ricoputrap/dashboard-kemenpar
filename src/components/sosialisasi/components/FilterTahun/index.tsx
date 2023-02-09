import React from 'react'
import { Container } from './index.styles'
import useData from './useData'
import FilterItem from './FilterItem'

const FilterTahun: React.FC = () => {
  const { tahun, daftarTahun, setTahun } = useData();

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