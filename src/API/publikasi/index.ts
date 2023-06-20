import useSWR from "swr";
import { fetcher } from "..";
import { getCookie } from "../../utils/cookie";
import { TResponseMediaOnline } from "./types/media-online.types";
import { TResponseMediaSosial } from "./types/media-social.types";
import { TResponseSectionFive } from "./types/section-five.types";
import { TResponseSectionThree } from "./types/section-three.types";
import { TResponseSectionTwo } from "./types/section-two.types";

export type TResponse = {
  data: {
    tahun: number;
    data: {
      media_sosial: TResponseMediaSosial;
      section_two: TResponseSectionTwo;
      section_three: TResponseSectionThree;
      media_online: TResponseMediaOnline;
      section_five: TResponseSectionFive;
    }
  }
}

const publikasi = (tahun: number) => {
  if (tahun == 2022) {
    const source: string = `data/publikasi/${tahun}.json`;
    const { data, error, isLoading } = useSWR<TResponse>(source, fetcher);
    return { data, error, isLoading }
  }
  else if (tahun == 2023) {
    const URL = "https://kampanye-sadarwisata.com/api/publikasi/main?tahun=2023";
    const token = getCookie("token");

    const { data, error, isLoading } = useSWR<TResponse>(
      [URL, token],
      ([URL, token]) => fetcher(URL, token)
    );

    return { data, error, isLoading }
  }

  return { data: undefined, error: undefined, isLoading: true }
};

export default publikasi;