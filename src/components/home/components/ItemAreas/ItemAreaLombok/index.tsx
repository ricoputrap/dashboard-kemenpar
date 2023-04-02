import React, { useMemo } from 'react'
import ItemArea from '../../../MapIndo/ItemArea';
import useHomeStore from '../../../state/store'
import defaultData from '../defaultData';
import { Container } from './index.styles';

const DPP = "lombok";

const ItemAreaLombok = () => {
  const map = useHomeStore(state => state.map);

  const data = useMemo(() => {
    const mapData = map.find(item => item.dpp === DPP) || defaultData;

    return [
      { tahun: 2022, jumlah: mapData[2022] },
      { tahun: 2023, jumlah: mapData[2023] }
    ]
  }, [map]);

  return (
    <Container>
      <ItemArea
        label={ DPP }
        data={ data }
      />
    </Container>
  )
}

export default ItemAreaLombok