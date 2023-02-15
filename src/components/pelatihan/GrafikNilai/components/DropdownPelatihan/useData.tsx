import React, { useMemo } from 'react'
import { TJenisPelatihan } from '../../state/index.types'
import { TDropdownItem } from '../../../../../types/utils.type';
import useNilaiStore from '../../state/store';

const DAFTAR_PELATIHAN: TJenisPelatihan[] = ["pelatihan_a_b", "pelatihan_c"];

interface ReturnValue {
  options: TDropdownItem[];
  activeItem: string;
  handleChange: (materi: string) => void;
}

const useData = (): ReturnValue => {
  const jenisPelatihan = useNilaiStore(state => state.jenisPelatihan);
  const setJenisPelatihan = useNilaiStore(state => state.setJenisPelatihan);

  const options: TDropdownItem[] = useMemo(() => {
    return DAFTAR_PELATIHAN.map(pelatihan => {
      if (pelatihan == "pelatihan_a_b") return {
        label: "PELATIHAN A & B",
        value: pelatihan
      }

      return {
        label: "PELATIHAN C",
        value: pelatihan
      }
    });
  }, [DAFTAR_PELATIHAN]);

  const handleChange = (pelatihan: string) => {
    const jenis: TJenisPelatihan = pelatihan == "PELATIHAN A & B"
      ? "pelatihan_a_b"
      : "pelatihan_c";
    setJenisPelatihan(jenis);
  }

  const activeItem: string = useMemo(() => {
    if (jenisPelatihan == "pelatihan_a_b")
      return "PELATIHAN A & B";
    return "PELATIHAN C"
  }, [jenisPelatihan])

  return {
    options,
    handleChange,
    activeItem
  }
}

export default useData