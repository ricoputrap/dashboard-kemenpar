import { TKPIData, TMapData } from "../../../types/home.type";

export type THomeState = {
  sosialisasi: TKPIData,
  pendampingan: TKPIData,
  pelatihan: TKPIData,
  map: TMapData[]
}

export type THomeActions = {
  setHomeData: (data: THomeState) => void
}