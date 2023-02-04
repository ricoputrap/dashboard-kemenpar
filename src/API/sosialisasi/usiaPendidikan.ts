import useSWR from "swr";
import { fetcher } from "..";
import { TUsia } from "../../components/sosialisasi/state/usia/index.types";

type TPendidikan = {
  pendidikan: string;
  jumlah: number;
}

export type TUsiaPendidikanSetahun = {
  tahun: number;
  dpp: string;
  usia: TUsia[];
  pendidikan: TPendidikan[];
}

export type TUsiaPendidikanResponse = {
  data: TUsiaPendidikanSetahun;
}

const usiaPendidikan = () => {
  const { data, error, isLoading } = useSWR<TUsiaPendidikanResponse>("sosialisasi/usia-pendidikan.json", fetcher);
  return { data, error, isLoading };
}

export default usiaPendidikan;