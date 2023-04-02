import React from 'react'
import ItemAreaBTS from './ItemAreaBTS';
import ItemAreaBYP from './ItemAreaBYP';
import ItemAreaLombok from './ItemAreaLombok';
import ItemAreaToba from './ItemAreaToba';

const ItemAreas: React.FC = () => {

  return (
    <>
      <ItemAreaToba />
      <ItemAreaBYP />
      <ItemAreaBTS />
      <ItemAreaLombok />
    </>
  )
}

export default ItemAreas