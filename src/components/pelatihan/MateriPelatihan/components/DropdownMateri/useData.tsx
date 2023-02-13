import { useMemo } from "react";
import { TDropdownItem } from "../../../../../types/utils.type";
import useMateriStore from "../../state/store";

const DAFTAR_MATERI = ["pelatihan_a", "pelatihan_b", "pelatihan_c"];

interface ReturnValue {
  options: TDropdownItem[];
  activeMateri: string;
  handleChange: (materi: string) => void;
}

const useData = (): ReturnValue => {
  const jenisMateri = useMateriStore(state => state.jenisMateri);
  const setJenisMateri = useMateriStore(state => state.setJenisMateri);

  const options: TDropdownItem[] = useMemo(() => {
    return DAFTAR_MATERI.map(materi => ({
      label: materi.split("_").join(" ").toUpperCase(),
      value: materi.split(" ").join("_")
    }))
  }, [DAFTAR_MATERI]);

  const handleChange = (materi: string) => {
    materi = materi.toLowerCase().split(" ").join("_");
    setJenisMateri(materi);
  }

  return {
    activeMateri: jenisMateri.split("_").join(" "),
    options,
    handleChange
  }
}

export default useData;