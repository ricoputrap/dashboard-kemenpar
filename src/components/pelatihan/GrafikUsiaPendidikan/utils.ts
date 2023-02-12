import { TPendidikanPerlokasi, TPendidikanPertahun } from "./state/pendidikan.types";
import { TUsiaPerlokasi, TUsiaPertahun } from "./state/usia.types";

export const getChartWidth = (width: number): number => {
  if (width == 0) {
    const WIDTH = 848;
    return WIDTH;
  }

  const DOUGHNUT_KPI_WIDTH = 390;
    const PAGE_PADDING_HORIZONTAL = 56 * 2;
    const GAP = 90;
    const deductedWidth = DOUGHNUT_KPI_WIDTH + PAGE_PADDING_HORIZONTAL + GAP;
    const remainingSpace = width - deductedWidth;

    return remainingSpace;
}

export const getHalfChartWidth = (width: number): number => {
  const PADDING = 2 * 28;
  const GAP = 28;
  const deductedWidth = PADDING + GAP;
  
  const haflWidth = Math.ceil(width / 2);
  const result: number = haflWidth - deductedWidth - 32;

  return result;
}

export const getUsiaSetahun = (
  usiaPertahun: TUsiaPertahun,
  tahun: number,
  lokasi: string
) => {
  if (!usiaPertahun.hasOwnProperty(tahun))
      return [];

  const usiaSetahun: TUsiaPerlokasi = usiaPertahun[tahun];
  if (!usiaSetahun.hasOwnProperty(lokasi))
    return [];

  return usiaSetahun[lokasi];
}

export const getPendidikanSetahun = (
  pendidikanPertahun: TPendidikanPertahun,
  tahun: number,
  lokasi: string
) => {
  if (!pendidikanPertahun.hasOwnProperty(tahun))
    return [];

  const pendidikanSetahun: TPendidikanPerlokasi = pendidikanPertahun[tahun];
  if (!pendidikanSetahun)
    return [];

  return pendidikanSetahun[lokasi] || [];
}