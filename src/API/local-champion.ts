import useSWR from "swr";
import { fetcher } from ".";
import { getCookie } from "../utils/cookie";
import { TLaporanBulanan } from "../components/local-champion/state/index.types";

export type TResponseLaporanPerDesa = {
  area: string;
  kec: string;
  kab: string;
  desa: string;
  laporanSetahun: TLaporanBulanan[];
}

export type TResponseChampion = {
  dpp: string;
  data: TResponseLaporanPerDesa[];
}

export const localChampion = (dpp: string) => {
  const location = dpp == "l. bajo" ? "labuan_bajo": dpp;
  const source = `data/local-champion/${location}.json`;
  const token = getCookie("token");

  const { data, error, isLoading } = useSWR<TResponseChampion>(source, fetcher);
  return { data, error, isLoading }
}