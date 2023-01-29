import { Flex, Image, Text } from '@chakra-ui/react';
import React, { useMemo } from 'react'
import AttachmentIcon from "../../../../../assets/icons/attachment.svg";

interface Props {
  nomor: number;
  data?: TLaporan;
}

const LaporanItem: React.FC<Props> = ({ nomor, data = undefined }) => {
  const isDefined: boolean = useMemo(() => data !== undefined, [data]);

  return (
    <Flex
      columnGap="5px"
      padding="8px 8px"
      border="1px solid #EAC170"
      background={ isDefined ? "#EAC170" : "transparent" }
      color={ isDefined ? "#0D1D37" : "#FFFFFF" }
      wrap="nowrap"
      minWidth="138px"
      height="38px"
      justifyContent="center"
    >
      <Text
        fontSize="15px"
        fontWeight={600}
        lineHeight="19px"
      >
        LAPORAN { nomor }
      </Text>

      { isDefined && (
        <Image
          alt="attachment"
          src={ AttachmentIcon }
          width="20px"
          height="20px"
        />
      )}
    </Flex>
  )
}

export default LaporanItem