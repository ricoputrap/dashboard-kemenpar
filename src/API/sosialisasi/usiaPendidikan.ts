import useSWR from "swr";
import { fetcher } from "..";
import { TUsia } from "../../components/sosialisasi/state/usia/index.types";
import { TPendidikan } from "../../components/sosialisasi/state/pendidikan/index.types";

export type TUsiaPendidikanSetahun = {
  tahun: number;
  dpp: string;
  usia: TUsia[];
  pendidikan: TPendidikan[];
}

export type TUsiaPendidikanResponse = {
  data: TUsiaPendidikanSetahun;
}

const usiaPendidikan = (tahun: number, lokasi: string) => {
  let dpp = lokasi;

  if (lokasi == "l.bajo")
    dpp = "labuan_bajo";

  const source = `data/sosialisasi/usiaPendidikan/${tahun}/${dpp}.json`;

  const { data, error, isLoading } = useSWR<TUsiaPendidikanResponse>(source, fetcher);
  return { data, error, isLoading };
}

export default usiaPendidikan;