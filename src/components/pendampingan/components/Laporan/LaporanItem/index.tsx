import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import AttachmentIcon from "../../../../../assets/icons/attachment.svg";

interface Props {
  nomor: number;
  data?: TLaporan;
}

const LaporanItem: React.FC<Props> = ({ nomor, data = undefined }) => {
  return (
    <Flex
      columnGap="5px"
      padding="8px 9px"
      border="1px solid #EAC170"
      background="#EAC170"
      color="#0D1D37"
      wrap="nowrap"
      minWidth="134px"
      height="38px"
    >
      <Text
        fontSize="15px"
        fontWeight={600}
        lineHeight="19px"
      >
        LAPORAN { nomor }
      </Text>

      <Image
        alt="attachment"
        src={ AttachmentIcon }
        width="20px"
        height="20px"
      />
    </Flex>
  )
}

export default LaporanItem