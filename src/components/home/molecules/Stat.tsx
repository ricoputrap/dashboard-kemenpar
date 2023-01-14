import React from 'react'
import { Flex } from '@chakra-ui/react'
import StatMain from '../atoms/StatMain'
import StatItem from '../atoms/StatItem'
import { TStatData } from '../../../types/home.type'
import StatYear from '../atoms/StatYear'

interface Props extends TStatData {
  hasBorder?: boolean;
}

const Stat: React.FC<Props> = ({ year, main, rows, hasBorder = false }) => {
  return (
    <Flex
      direction="column"
      borderLeft={ hasBorder ? "1px solid #EAC170" : "none" }
    >
      <StatYear year={ year } />

      <Flex
        direction="column"
        alignItems="center"
        rowGap="24px"
        padding="15px 30px 18px"
      >
        <StatMain value={ main.value } label={ main.label } />

        {rows.map((rowData, index) => (
          <Flex key={index}>
            <StatItem
              value={ rowData.full.value }
              label={ rowData.full.label }
              white
            />
            <StatItem
              value={ rowData.done.value }
              label={ rowData.done.label }
              hasBorder
            />
            {!!rowData.percent && (
              <StatItem
                value={ rowData.percent.value }
                hasBorder
                small
              />
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

export default Stat;