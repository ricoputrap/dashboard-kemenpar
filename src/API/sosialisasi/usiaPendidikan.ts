import useSWR from "swr";
import { fetcher } from "..";
import { TUsia } from "../../components/sosialisasi/state/usia/index.types";
import { TPendidikan } from "../../components/sosialisasi/state/pendidikan/index.types";
import { getCookie } from "../../utils/cookie";

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
    dpp = tahun == 2022 ? "labuan_bajo" : "labuan bajo";

  if (tahun === 2022) {
    const source = `data/sosialisasi/usiaPendidikan/${tahun}/${dpp}.json`;

    const { data, error, isLoading } = useSWR<TUsiaPendidikanResponse>(source, fetcher);
    return { data, error, isLoading };
  }
  else if (tahun === 2023) {
    const URL = `https://kampanye-sadarwisata.com/api/sosialisasi/usia-pendidikan?dpp=${dpp}&tahun=${tahun}`;
    const token = getCookie("token");

    const { data, error, isLoading } = useSWR<TUsiaPendidikanResponse>(
      [URL, token],
      ([URL, token]) => fetcher(URL, token)
    );

    return { data, error, isLoading };
  }
  return { data: null, error: null, isLoading: true };
}

export default usiaPendidikan;