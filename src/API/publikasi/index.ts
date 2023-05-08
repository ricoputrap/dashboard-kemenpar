import useSWR from "swr";
import { fetcher } from "..";
import { TResponseMediaSosial } from "./types/media-social.types";
import { TResponseSectionTwo } from "./types/section-two.types";

export type TResponse = {
  data: {
    tahun: number;
    data: {
      media_sosial: TResponseMediaSosial;
      section_two: TResponseSectionTwo;
    }
  }
}

const publikasi = (tahun: number) => {
  const source: string = `data/publikasi/${tahun}.json`;
  const { data, error, isLoading } = useSWR<TResponse>(source, fetcher);
  return { data, error, isLoading }
};

export default publikasi;