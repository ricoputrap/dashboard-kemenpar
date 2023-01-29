import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
import Dropdown from '../../../atoms/Dropdown'
import { TDropdownItem } from "../../../../types/utils.type";

const Laporan: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("wakatobi");
  const options: TDropdownItem[] = useMemo(() => {
    const keys: string[] = ["toba", "byp", "bts", "lombok", "l. bajo", "wakatobi"];
    const result: TDropdownItem[] = keys.map(item => ({
      label: item.toUpperCase(),
      value: item
    }));

    return result;
  }, []);

  const handleChange = (label: string) => {
    setActiveItem(label.toLowerCase());
  }

  return (
    <Box
      border="1px solid #EAC170"
      borderRadius="10px"
      background="rgba(17, 38, 71, 0.85);"
      padding="28px"
    >
      <Flex direction="column">
        {/* Dropdown Filter */}
        <Flex columnGap="12px" alignItems="start">
          <Text
            fontSize="16px"
            fontWeight={500}
            lineHeight="20px"
            marginTop="4px"
          >
            DPP:
          </Text>
          <Dropdown
            activeItem={ activeItem }
            options={ options }
            onChange={ handleChange }
            />
        </Flex>

        {/* Laporan Per Desa  */}
        <Box></Box>
      </Flex>
    </Box>
  )
}

export default Laporan