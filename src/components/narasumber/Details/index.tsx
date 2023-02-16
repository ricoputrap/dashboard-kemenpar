import React from 'react'
import Search from './components/Search'
import { Container } from './index.styles'
import { Box } from '@chakra-ui/react'
import DataTable from './components/DataTable'

const Details: React.FC = () => {

  return (
    <Container>
      <Box alignSelf="end">
        <Search />
      </Box>

      <DataTable />
    </Container>
  )
}

export default Details