import React from 'react'
import ItemAreaBTS from './ItemAreaBTS';
import ItemAreaBYP from './ItemAreaBYP';
import ItemAreaToba from './ItemAreaToba';

const ItemAreas: React.FC = () => {

  return (
    <>
      <ItemAreaToba />
      <ItemAreaBYP />
      <ItemAreaBTS />
    </>
  )
}

export default ItemAreas