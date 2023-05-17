import useSWR from "swr";
import { fetcher } from ".";
import { getCookie } from "../utils/cookie";
import { TResponseLaporanPerDesa } from "../components/local-champion/state/index.types";

export type TResponseChampion = {
  data: {
    dpp: string;
    data: TResponseLaporanPerDesa[];
  }
}

export const localChampion = (dpp: string) => {
  const location = dpp == "l. bajo" ? "labuan_bajo": dpp;
  const URL = `https://kampanye-sadarwisata.com/api/local-champion/main?dpp=${location}`;
  const token = getCookie("token");

  const { data, error, isLoading } = useSWR<TResponseChampion>(
    [URL, token],
    ([URL, token]) => fetcher(URL, token)
  );
  return { data, error, isLoading }
}