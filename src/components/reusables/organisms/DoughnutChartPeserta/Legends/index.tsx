import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import LegendItem from '../LegendItem'
import styles from "./Legends.module.css"
import { TGenderData } from '../types/legends.types'

interface Props {
  menData: TGenderData;
  womenData: TGenderData;
}

const Legends: React.FC<Props> = ({ menData, womenData }) => {
  return (
    <Box id="doughnut-legends" className={ styles.container }>
      <Text className={ styles.title }>
        Jenis Kelamin
      </Text>

      <Flex direction="column" rowGap="12px">

        {/* LAKI-LAKI */}
        <LegendItem
          value={ menData.value }
          percent={ menData.percent }
          label={ menData.label }
          color={ menData.color }
        />

        {/* PEREMPUAN */}
        <LegendItem
          value={ womenData.value }
          percent={ womenData.percent }
          label={ womenData.label }
          color={ womenData.color }
        />
      </Flex>
    </Box>
  )
}

export default Legends