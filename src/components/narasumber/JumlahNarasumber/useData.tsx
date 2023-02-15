import React from 'react'
import { TGenderData } from '../../reusables/organisms/DoughnutChartPeserta/types/legends.types'

interface ReturnValue {
  menData: TGenderData;
  womenData: TGenderData;
}

const useData = (): ReturnValue => {
  const menData: TGenderData = {
    value: 40,
    percent: 57,
    label: "laki-laki",
    color: "#00FFFF"
  }

  const womenData: TGenderData = {
    value: 30,
    percent: 43,
    label: "laki-laki",
    color: "#FF1F00"
  }

  return { menData, womenData }
}

export default useData