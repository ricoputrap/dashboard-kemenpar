import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import LegendItem from '../LegendItem'
import styles from "./Legends.module.css"

const Legends: React.FC = () => {
  return (
    <Box className={ styles.container }>
      <Text className={ styles.title }>
        Jenis Kelamin
      </Text>

      <Flex direction="column" rowGap="12px">

        {/* LAKI-LAKI */}
        <LegendItem
          value={60}
          percent={30}
          label="laki-laki"
          color="#00FFFF"
        />

        {/* PEREMPUAN */}
        <LegendItem
          value={140}
          percent={70}
          label="perempuan"
          color="#FF1F00"
        />
      </Flex>
    </Box>
  )
}

export default Legends