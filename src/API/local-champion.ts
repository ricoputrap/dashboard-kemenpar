import useSWR from "swr";
import { fetcher } from ".";
import { getCookie } from "../utils/cookie";
import { TLaporanBulanan, TLaporanPerDesa } from "../components/local-champion/state/index.types";

export type TResponseChampion = {
  dpp: string;
  data: TLaporanPerDesa[];
}

export const localChampion = (dpp: string) => {
  const location = dpp == "l. bajo" ? "labuan_bajo": dpp;
  const source = `data/local-champion/${location}.json`;
  const token = getCookie("token");

  const { data, error, isLoading } = useSWR<TResponseChampion>(source, fetcher);
  return { data, error, isLoading }
}