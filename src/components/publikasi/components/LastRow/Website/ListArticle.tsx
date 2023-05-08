import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { TArticle } from '../../../state/index.types'
import RowData from './RowData'

interface Props {
  data: TArticle[];
}

const ListArticle: React.FC<Props> = ({ data }) => {
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