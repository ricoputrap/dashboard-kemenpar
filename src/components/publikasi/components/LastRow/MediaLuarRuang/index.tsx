import React from 'react'
import BarChartPublikasi from '../../BarChartPublikasi';
import useData from '../useData';

const MediaLuarRuang: React.FC = () => {
  const { mediaLuarRuang } = useData();

  return (
    <BarChartPublikasi
      header="Media Luar Ruang"
      title={(
        <>
          MEDIA LUAR RUANG<br/>
          6 DESTINASI PARIWISATA PRIORITAS
        </>
      )}
      dataset={[mediaLuarRuang.dataset]}
      labels={ mediaLuarRuang.labels }
      url={ mediaLuarRuang.url }
    />
  )
}

export default MediaLuarRuang