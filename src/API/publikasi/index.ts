import useSWR from "swr";
import { fetcher } from "..";
import { TResponseMediaOnline } from "./types/media-online.types";
import { TResponseMediaSosial } from "./types/media-social.types";
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
    }
  }
}

const publikasi = (tahun: number) => {
  const source: string = `data/publikasi/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TResponse>(source, fetcher);
  return { data, error, isLoading }
};

export default publikasi;