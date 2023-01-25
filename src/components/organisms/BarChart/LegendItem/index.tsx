import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import styles from "./LegendItem.module.css";

interface Props {
  label: string;
  color: string;
}

const LegendItem: React.FC <Props>= ({ label, color }) => {
  return (
    <Flex alignItems="center" columnGap="4px">
      <Box className={ styles.box }background={ color }></Box>

      <Text className={ styles.label }>
        { label }
      </Text>
    </Flex>
  )
}

export default LegendItem