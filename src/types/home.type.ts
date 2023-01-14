export type TStatMainData = {
  value: number;
  label: string;
}

export type TStatItemData = {
  value: number | string;
  label?: string;
}

export type TStatRowData = {
  full: TStatItemData;
  done: TStatItemData;
  percent: TStatItemData;
}

export type TStatData = {
  year: number;
  main: TStatMainData;
  rows: TStatRowData[];
}

export type TKPIData = {
  title: string;
  stat: TStatData;
}