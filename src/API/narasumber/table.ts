import useSWR from "swr";
import { fetcher } from "..";

export type TResponseRow = {
  nama: string;
  institusi: string;
  domisili: string;
}

export type TDataTableResponse = {
  data: TResponseRow[];
}

const table = () => {
  const source: string = "narasumber/tableData.json";
  const { data, error, isLoading } = useSWR<TDataTableResponse>(source, fetcher);
  return { data, error, isLoading }
}

export default table;