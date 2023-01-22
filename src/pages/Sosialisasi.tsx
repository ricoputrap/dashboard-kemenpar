import React from 'react'
import BasePage from '../components/templates/BasePage'
import { Box } from '@chakra-ui/react'
import GroupedKPIPeserta from '../components/GroupedKPIPeserta'
import useDataSosialisasi from '../hooks/useDataSosialisasi'

const Sosialisasi: React.FC = () => {
  const { kpi, isLoading, error } = useDataSosialisasi();

  return (
    <BasePage id="page-sosialisasi">
      <Box width="390px">
        <GroupedKPIPeserta
          title="Jumlah Peserta Sosialisasi DPP"
          data={kpi}
        />
      </Box>
    </BasePage>
  )
}

export default Sosialisasi