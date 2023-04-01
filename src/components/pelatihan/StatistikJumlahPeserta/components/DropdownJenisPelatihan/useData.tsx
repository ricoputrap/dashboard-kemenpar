import { useMemo } from "react";
import { TDropdownItem } from "../../../../../types/utils.type";
import useStatistikStore from "../../state/store";

const JENIS_PELATIHAN = ["pelatihan_a_&_b", "pelatihan_c"];

interface ReturnValue {
  options: TDropdownItem[];
  activeOption: string;
  handleChange: (jenis: string) => void;
}

const useData = (): ReturnValue => {
  const jenisPelatihan = useStatistikStore(state => state.jenisPelatihan);
  const setJenisPelatihan = useStatistikStore(state => state.setJenisPelatihan);

  const options: TDropdownItem[] = useMemo(() => {
    return JENIS_PELATIHAN.map(jenis => ({
      label: jenis.split("_").join(" ").toUpperCase(),
      value: jenis.split(" ").join("_")
    }))
  }, [JENIS_PELATIHAN]);

  const handleChange = (jenis: string) => {
    jenis = jenis.toLowerCase().split(" ").join("_");
    setJenisPelatihan(jenis);
  }

  return {
    activeOption: jenisPelatihan.split("_").join(" "),
    options,
    handleChange
  }
}

export default useData;