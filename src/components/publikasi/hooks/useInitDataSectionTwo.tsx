import { useEffect } from "react";
import { TResponse } from "../../../API/publikasi";
import usePublikasiStore from "../state/store";
import computeDataSectionTwo from "../utils/computeData/section-two";

const useInitDataSectionTwo = (data?: TResponse) => {
  const tahun = usePublikasiStore(state => state.tahun);
  const setDataSectionTwo = usePublikasiStore(state => state.setDataSectionTwo);

  useEffect(() => {
    if (!data) return;

    const { section_two } = data.data.data;
    const dataSectionTwo = computeDataSectionTwo(section_two);
    setDataSectionTwo(dataSectionTwo, tahun);
  }, [data, tahun]);
}

export default useInitDataSectionTwo;