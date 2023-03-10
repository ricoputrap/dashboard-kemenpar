import { TDropdownItem } from "../../../../../types/utils.type";
import useUsiaPendidikanStore from "../../state/store";

interface ReturnValue {
  options: TDropdownItem[];
  lokasi: string;
  handleChange: (newLokasi: string) => void;
}

const useData = (): ReturnValue => {
  const lokasi = useUsiaPendidikanStore(state => state.lokasi);
  const setLokasi = useUsiaPendidikanStore(state => state.setLokasi);

  const options: TDropdownItem[] = [
    { label: "TOBA", value: "toba" },
    { label: "BYP", value: "byp" },
    { label: "BTS", value: "bts" },
    { label: "LOMBOK", value: "lombok" },
    { label: "L.BAJO", value: "l.bajo" },
    { label: "WAKATOBI", value: "wakatobi" }
  ];

  const handleChange = (newLokasi: string) => {
    setLokasi(newLokasi.toLowerCase());
  }

  return { options, lokasi, handleChange }
}

export default useData;