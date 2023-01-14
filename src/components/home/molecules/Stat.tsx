import React from 'react'
import { Flex } from '@chakra-ui/react'
import StatMain from '../atoms/StatMain'
import StatItem from '../atoms/StatItem'
import { TStatData } from '../../../types/home.type'
import StatYear from '../atoms/StatYear'

const Stat: React.FC<TStatData> = ({ year, main, rows }) => {
  return (
    <>
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
            <StatItem
              value={ rowData.percent.value }
              hasBorder
              small
            />
          </Flex>
        ))}
      </Flex>
    </>
  )
}

export default Stat;