import { useMemo } from "react";
import { TDropdownItem } from "../../../../../types/utils.type";
import useMateriStore from "../../state/store";

const DAFTAR_MATERI = ["pelatihan a", "pelatihan b", "pelatihan c"];

interface ReturnValue {
  options: TDropdownItem[];
  activeMateri: string;
  handleChange: (materi: string) => void;
}

const useData = (): ReturnValue => {
  const activeMateri = useMateriStore(state => state.activeMateri);
  const setActiveMateri = useMateriStore(state => state.setActiveMateri);

  const options: TDropdownItem[] = useMemo(() => {
    return DAFTAR_MATERI.map(materi => ({
      label: materi.toUpperCase(),
      value: materi
    }))
  }, [DAFTAR_MATERI]);

  const handleChange = (materi: string) => {
    setActiveMateri(materi);
  }

  return {
    activeMateri,
    options,
    handleChange
  }
}

export default useData;