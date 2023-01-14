import React from 'react'
import BasePage from '../components/templates/BasePage'
import DescriptionBox from '../components/organisms/DescriptionBox'

const Home: React.FC = () => {
  return (
    <BasePage id="page-home">
      <DescriptionBox />
    </BasePage>
  )
}

export default Home