import React, { useMemo } from 'react'
import useStore from '../../../state/store';
import { TDropdownItem } from '../../../../../types/utils.type';

interface ReturnValue {
  activeDPP: string;
  options: TDropdownItem[];
  handleChange: (label: string) => void;
}

const useFilter = (): ReturnValue => {
  const activeDPP: string = useStore((state) => state.activeDPP);
  const setActiveDPP = useStore((state) => state.setActiveDPP);

  const options: TDropdownItem[] = useMemo(() => {
    const keys: string[] = ["toba", "byp", "bts", "lombok", "l. bajo", "wakatobi"];
    const result: TDropdownItem[] = keys.map(item => ({
      label: item.toUpperCase(),
      value: item
    }));

    return result;
  }, []);

  const handleChange = (label: string) => {
    setActiveDPP(label.toLowerCase());
  }

  return {
    activeDPP,
    options,
    handleChange
  }
}

export default useFilter