import React from 'react'
import BarChartPublikasi from '../../BarChartPublikasi'

const TopListMedia: React.FC = () => {
  return (
    <BarChartPublikasi
      header="Top List Media"
      title="Media Nasional"
      dataset={[
        { label: 'Jumlah Berita', data: [27, 27, 27, 26, 25], backgroundColor: '#EAC170' },
      ]}
      labels={["Tribunnews.com", "Mediaindonesia.com", "Indopos.co.id", "Liputan6.com", "Antaranews.com"]}
      url="https://drive.google.com/file/d/1G1vcywG8kHbyOLKCYbYnLNTAJ3kY0Xic/view?usp=share_link"
    />
  )
}

export default TopListMedia