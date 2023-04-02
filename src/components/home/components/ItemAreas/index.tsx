import React from 'react'
import ItemAreaBajo from './ItemAreaBajo';
import ItemAreaBTS from './ItemAreaBTS';
import ItemAreaBYP from './ItemAreaBYP';
import ItemAreaLombok from './ItemAreaLombok';
import ItemAreaToba from './ItemAreaToba';
import ItemAreaWakatobi from './ItemAreaWakatobi';

const ItemAreas: React.FC = () => {

  return (
    <>
      <ItemAreaToba />
      <ItemAreaBYP />
      <ItemAreaBTS />
      <ItemAreaLombok />
      <ItemAreaWakatobi />
      <ItemAreaBajo />
    </>
  )
}

export default ItemAreas