import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
  percent: number
}

const HorizontalBarItem: React.FC<Props> = ({ percent }) => {
  return (
    <Box
      height="29px"
      backgroundColor="#EAC1704D"
    >
      <Box
        width={`${percent}%`}
        height="29px"
        background="linear-gradient(90deg, #EAC170 0%, rgba(234, 193, 112, 0.502083) 78.96%, rgba(234, 193, 112, 0) 100%)"
        transform="rotate(-180deg)"
      ></Box>
    </Box>
  )
}

export default HorizontalBarItem