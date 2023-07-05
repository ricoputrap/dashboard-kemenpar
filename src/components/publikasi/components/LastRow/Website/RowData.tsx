import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react'

interface Props {
  title: string;
  link?: string;
  isHeader?: boolean;
}

const RowData: React.FC<Props> = ({ title, link, isHeader }) => {
  const background = useMemo(() => isHeader ? "#FFFFFF" : "transparent", [isHeader]);
  const color = useMemo(() => isHeader ? "#112647" : "#FFFFFF", [isHeader]);
  const fontWeight = useMemo(() => isHeader ? 700 : 500, [isHeader]);
  const border = useMemo(() => isHeader ? "none" : "1px solid #EAC170", [isHeader]);

  return (
    <Box
      padding="16px 24px"
      background={ background }
      border={ border }
      borderRadius="5px"
      color={ color }
      fontSize="18px"
      lineHeight="24px"
      fontWeight={ fontWeight }
      boxSizing='border-box'
    >
      <Flex columnGap="20px">
        <Text width="50%" wordBreak="break-word">{ title }</Text>
        
        {!!isHeader
          ? <Text width="50%">Link</Text>
          : (
            <Link width="50%" href={ link } target="_blank">
              { link }
            </Link>
          )
        }
      </Flex>
    </Box>
  )
}

export default RowData