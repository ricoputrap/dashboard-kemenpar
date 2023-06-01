import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import MediaElektronik from './MediaElektronik'
import MediaLuarRuang from './MediaLuarRuang'
import TopListMedia from './TopListMedia'
import Website from './Website'

const LastRow: React.FC = () => {
  return (
    <Box id="last-row">
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(1, 1fr)"
        gap="44px"
      >
        <Stack
          rowGap="40px"
          justifyContent="space-between"
          maxH="1300px"
          maxW="574px"
        >
          <MediaElektronik />
          <MediaLuarRuang />
          <TopListMedia />
        </Stack>

        <Box maxH="1300px">
          <Website />
        </Box>
      </Grid>
    </Box>
  )
}

export default LastRow