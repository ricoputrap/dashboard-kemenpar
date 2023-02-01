import React, { useEffect, useState } from 'react'
import { TBarChartItem } from '../../../../types/charts.type';

const useData = (dataInput: TBarChartItem[]) => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<TBarChartItem[]>([]);

  useEffect(() => {
    if (dataInput.length == 0) return;

    let uniqueCategories: string[] = dataInput.reduce(
      (allCategories: string[], current) => {
        if (!allCategories.includes(current.category))
          allCategories.push(current.category);
          
        return allCategories;
      }, []);

    if (uniqueCategories.length == 1 && uniqueCategories[0] == undefined) {
      uniqueCategories = [];
    }

    setActiveCategory(uniqueCategories[0]);
    setCategories(uniqueCategories);
  }, [dataInput]);

  useEffect(() => {
    if (activeCategory == "") return;
    const filteredData = dataInput.filter(item => item.category == activeCategory);
    setData(filteredData);
  }, [activeCategory]);

  const changeCategory = (category: string) => {
    setActiveCategory(category);
  }

  return { data, categories, activeCategory, changeCategory };
}

export default useData