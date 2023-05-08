import { useEffect } from "react";
import { TResponse } from "../../../API/publikasi";
import usePublikasiStore from "../state/store";
import computeDataSectionThree from "../utils/computeData/section-three";

const useInitDataSectionThree = (data?: TResponse) => {
  const tahun = usePublikasiStore(state => state.tahun);
  const setDataSectionThree = usePublikasiStore(state => state.setDataSectionThree);

  useEffect(() => {
    if (!data) return;

    const { section_three } = data.data.data;
    const dataSectionThree = computeDataSectionThree(section_three);
    setDataSectionThree(dataSectionThree, tahun);
  }, [data, tahun]);
}

export default useInitDataSectionThree;