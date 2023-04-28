import { Box, Grid, GridItem, Stack } from '@chakra-ui/react'
import React from 'react'
import MediaElektronik from './MediaElektronik'
import MediaLuarRuang from './MediaLuarRuang'
import TopListMedia from './TopListMedia'
import Website from './Website'

const LastRow: React.FC = () => {
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap="44px">
        <GridItem height="1300px">
          <Stack justifyContent="space-between" height="100%">
            <MediaElektronik />
            <MediaLuarRuang />
            <TopListMedia />
          </Stack>
        </GridItem>

        <GridItem height="1300px">
          <Website />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default LastRow