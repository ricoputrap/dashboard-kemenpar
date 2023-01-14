import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const Paragraph = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-align: justify;
  line-height: 18px;
  letter-spacing: -0.03em;
`;

const Content: React.FC = () => {
  return (
    <Flex direction="column" rowGap="12px">
      <Paragraph>
        Kampanye Sadar Wisata 5.0 merupakan kegiatan yang ditujukan untuk membangun pola pikir masyarakat agar menjadi pemeran aktif dalam pengembangan pariwisata di daerahnya. Program ini merupakan salah satu program unggulan di Kemenparekraf yang didukung sepenuhnya oleh Bank Dunia.
      </Paragraph>
      <Paragraph>
        Tahapan Kampanye Sadar Wisata 5.0 terdiri atas Kegiatan Sosialisasi, Pelatihan, Penyusunan Program Pengembangan Desa Wisata, Pendampingan, dan Apresiasi.
      </Paragraph>
      <Paragraph>
        Sosialisasi menyasar sedikitnya 100 pelaku atau SDM Pariwisata di 65 Desa Wisata pada tahun 2022 dan 90 Desa Wisata pada tahun 2023 di 6 Destinasi Prioritas Pariwisata, yaitu:
        Danau Toba, Borobudur Yogyakarta Prambanan, Bromo Tengger Semeru, Lombok, Labuan Bajo dan Wakatobi.
      </Paragraph>
      <Paragraph>
        Pelatihan ditujukan untuk meningkatkan kapasitas pelaku pariwisata meliputi Program Pengembangan Potensi Produk Pariwisata, Homestay, Kuliner dan Cinderamata serta Kewirausahaan dan Manajamen Bisnis
      </Paragraph>
      <Paragraph>
        Target Program ini adalah: Pokdarwis (Kelompok Sadar Wisata), BUMDES, UMKM, Koperasi, Pemandu Wisata dan pelaku usaha pariwisata lainnya.
      </Paragraph>
    </Flex>
  )
}

export default Content