import { Box, Image, Stack } from '@chakra-ui/react';
import React from 'react'
import ChartLine from "../../../../assets/lines/chart-line.svg"
import { MediaItem, Title } from './index.styles';

type TMediaOnline = {
  name: string;
  value: number;
}

const daftarMediaOnline: TMediaOnline[] = [
  { name: "lokal yogyakarta", value: 9 },
  { name: "toba - samosir", value: 17 },
  { name: "nasional", value: 15 },
  { name: "lokal lombok, NTB", value: 14 },
  { name: "lokal, kendari - wakatobi, sulawesi tenggara", value: 6 },
  { name: "lokal malang, jawa timur", value: 4 },
  { name: "lokal labuan bajo", value: 5 },
]

const MediaOnline: React.FC = () => {
  return (
    <Box id="media-online" width="100%">
      <Image src={ ChartLine } width="100%" />

      <Stack rowGap="16px" marginTop="8px">
        <Title>Media Online</Title>

        {daftarMediaOnline.map(media => (
            <MediaItem>
              Media { media.name } :
               <span>
                 { media.value } media
               </span>
            </MediaItem>
        ))}
      </Stack>
    </Box>
  )
}

export default MediaOnline