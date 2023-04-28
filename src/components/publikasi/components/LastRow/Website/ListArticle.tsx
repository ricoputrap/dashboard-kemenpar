import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { data } from './data'
import RowData from './RowData'

const ListArticle: React.FC = () => {
  return (
    <Box id="list-article">
      <Box paddingRight="20px">
        <RowData title="Judul Artikel" isHeader />
      </Box>
      
      <Box marginTop="20px" maxH="880px" overflowY="scroll">
        <Stack rowGap="12px" paddingRight="20px">
          {data.map(article => (
            <RowData
              key={ article.no }
              title={ article.title }
              link={ article.link }
            />
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default ListArticle