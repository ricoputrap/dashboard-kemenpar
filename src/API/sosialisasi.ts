import { TStatistikPeserta } from "../components/reusables/organisms/StatistikPeserta/index.types";
import statistik from "./sosialisasi/jumlahPeserta";
import kategoriUsaha from "./sosialisasi/kategoriUsaha";
import nilai from "./sosialisasi/nilai";
import usiaPendidikan from "./sosialisasi/usiaPendidikan";

export type TStatistikPesertaPertahun = {
  tahun: number;
  statistik: TStatistikPeserta[];
}

export type TStatistikResponse = {
  data: TStatistikPesertaPertahun;
}

export default {
  statistik,
  kategoriUsaha,
  nilai,
  usiaPendidikan
}