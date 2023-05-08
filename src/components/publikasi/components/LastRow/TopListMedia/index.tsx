import React from 'react'
import BarChartPublikasi from '../../BarChartPublikasi'
import useData from '../useData'

const TopListMedia: React.FC = () => {
  const { topListMedia } = useData();

  return (
    <BarChartPublikasi
      header="Top List Media"
      title="Media Nasional"
      dataset={[ topListMedia.dataset ]}
      labels={ topListMedia.labels}
      url={ topListMedia.url }
    />
  )
}

export default TopListMedia