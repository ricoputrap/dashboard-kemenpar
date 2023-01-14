import { Box } from '@chakra-ui/react'
import React from 'react'
import Stat from '../../molecules/Stat'
import { TKPIData } from '../../../../types/home.type'
import KPIHeader from '../../atoms/KPIHeader'

const pendampingan: TKPIData = {
  title: "pendampingan",
  stat: {
    year: 2023,
    main: {
      value: 6,
      label: "DPP"
    },
    rows: [
      {
        full: { value: 65, label: "Desa" },
        done: { value: 0, label: "Terealisasi" },
        percent: { value: "0%" }
      },
      {
        full: { value: 325, label: "Kunjungan" },
        done: { value: 0, label: "Terealisasi" },
        percent: { value: "0%" }
      }
    ]
  }
}

const KPI: React.FC = () => {
  return (
    <Box
      width="fit-content"
      border="1px solid #EAC170"
      borderRadius="10px"
    >
      <KPIHeader title={ pendampingan.title } />
      <Stat
        year={ pendampingan.stat.year }
        main={ pendampingan.stat.main }
        rows={ pendampingan.stat.rows }
      />
    </Box>
  )
}

export default KPI