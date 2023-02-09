import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./LegendItem.module.css";

interface Props {
  value: number;
  percent: number;
  label: string;
  color: "#00FFFF" | "#FF1F00";
}

const LegendItem: React.FC<Props> = ({ value, percent, label, color }) => {
  return (
    <Flex columnGap="8px" alignItems="start">
      <Box className={ styles.box } background={ color }></Box>
      
      <Flex columnGap="4px">
        <Box>
          <Text className={ styles.value }>{ value }</Text>
          <Text className={ styles.percent }>
            { percent }%
          </Text>
        </Box>

        <Box>
          <Text className={ styles.label }>{ label }</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default LegendItem