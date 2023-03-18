import { Divider, Flex, Popover, PopoverContent, PopoverTrigger, Portal, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  label: string;
}

const ItemArea: React.FC<Props> = ({ label }) => {
  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <Flex
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
        >
          <Text
            fontWeight={500}
            color="#112647"
          >
            { label }
          </Text>
        </Flex>
      </PopoverTrigger>
      <Portal>
        <PopoverContent
          width="154px"
          textAlign="center"
          padding="10px 12px"
          color="#112647"
          background="#E9C270"

          display="flex"
          flexDirection="column"
          rowGap="10px"
        >
          <Text
            fontSize="17px"
            fontWeight={700}
            fontFamily="Montserrat"
          >
            { label }
          </Text>

          <Divider borderColor="#112647" />

          <Flex direction="column" rowGap="0px">
            <Text
              fontSize="14px"
              fontWeight={700}
              fontFamily="Montserrat"
              lineHeight="17px"
            >
              2022
            </Text>
            <Text
              fontSize="14px"
              fontWeight={500}
              fontFamily="Montserrat"
              lineHeight="17px"
            >
              18 Desa Wisata
            </Text>
          </Flex>

          <Flex direction="column" rowGap="0px">
            <Text
              fontSize="14px"
              fontWeight={700}
              fontFamily="Montserrat"
              lineHeight="17px"
            >
              2023
            </Text>
            <Text
              fontSize="14px"
              fontWeight={500}
              fontFamily="Montserrat"
              lineHeight="17px"
            >
              10 Desa Wisata
            </Text>
          </Flex>

          <Divider borderColor="#112647" />

          <Flex direction="column" rowGap="0px">
            <Text
              fontSize="14px"
              fontWeight={700}
              fontFamily="Montserrat"
              lineHeight="17px"
            >
              Total
            </Text>
            <Text
              fontSize="14px"
              fontWeight={500}
              fontFamily="Montserrat"
              lineHeight="17px"
            >
              28 Desa Wisata
            </Text>
          </Flex>
        </PopoverContent>
      </Portal>
    </Popover>
  )
}

export default ItemArea