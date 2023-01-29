import { Box, Flex, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import RowData from './RowData'
import { TLaporan } from '../../../types/laporan.types'

interface Props {
  data: TLaporan;
}

const ModalBodyLaporan: React.FC<Props> = ({ data }) => {
  const { wilayah, deskripsi, foto, video, pdf } = data;

  return (
    <Flex direction="column" rowGap="20px" paddingBottom="28px">
      {/* wilayah */}
      <RowData
        label="WILAYAH"
        value={(
          <Box
            fontSize="20px"
            fontWeight={400}
            fontFamily="Montserrat"
            textTransform="uppercase"
          >
            <Text>{ wilayah.area }, { wilayah.kab },</Text>
            <Text>{ wilayah.kec }, { wilayah.desa }</Text>
          </Box>
        )}
      />

      {/* deskripsi */}
      <RowData
        label="DESKRIPSI"
        value={(
          <Text
            fontSize="20px"
            fontWeight={400}
            fontFamily="Montserrat"
          >
            { deskripsi }
          </Text>
        )}
      />

      {/* foto */}
      <RowData
        label="FOTO"
        value={(
          <Flex wrap="wrap" gap="12px">
            {foto.map((src, index) => (
              <Image
                key={ index }
                src={ src }
                width="260px"
                height="180px"
              />
            ))}
          </Flex>
        )}
      />

      {/* video */}
      <RowData
        label="VIDEO"
        value={(
          <LinkBox
            as="div"
            background="#00FFFF"
            color="#0D1D37"
            padding="12px"
            borderRadius="10px"
          >
            <LinkOverlay href={ video } target="_blank">
              LIHAT VIDEO
            </LinkOverlay>
          </LinkBox>
        )}
      />

      {/* PDF */}
      <RowData
        label="PDF"
        value={(
          <LinkBox
            as="div"
            background="#00FFFF"
            color="#0D1D37"
            padding="12px"
            borderRadius="10px"
          >
            <LinkOverlay href={ pdf } target="_blank">
              EXPORT
            </LinkOverlay>
          </LinkBox>
        )}
      />
    </Flex>
  )
}

export default ModalBodyLaporan