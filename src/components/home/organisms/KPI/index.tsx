import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Stat from '../../molecules/Stat'
import { TKPIData } from '../../../../types/home.type'
import KPIHeader from '../../atoms/KPIHeader'

interface Props {
  data: TKPIData;
}

const KPI: React.FC<Props> = ({ data }) => {
  const { title, stats } = data;

  return (
    <Box
      width="fit-content"
      border="1px solid #EAC170"
      borderRadius="10px"
    >
      <KPIHeader title={ title } />
      <Flex>
        {stats.map((stat, index) => (
          <Stat
            key={ index }
            year={ stat.year }
            main={ stat.main }
            rows={ stat.rows }
            hasBorder={ index !== 0 }
          />
        ))}
      </Flex>
    </Box>
  )
}

export default KPI