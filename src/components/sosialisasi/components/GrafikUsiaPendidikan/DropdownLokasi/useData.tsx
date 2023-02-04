import React from 'react'
import { TDropdownItem } from '../../../../../types/utils.type'
import useUsiaPendidikanStore from '../../../state/usiaPendidikan/store';

interface ReturnValue {
  options: TDropdownItem[];
  lokasi: string;
  handleChange: (newLokasi: string) => void;
}

const useData = (): ReturnValue => {
  const { lokasi, setLokasi } = useUsiaPendidikanStore();

  const options: TDropdownItem[] = [
    { label: "TOBA", value: "toba" },
    { label: "BYP", value: "byp" },
    { label: "BTS", value: "bts" },
  ];

  const handleChange = (newLokasi: string) => {
    setLokasi(newLokasi.toLowerCase());
  }

  return { options, lokasi, handleChange }
}

export default useData