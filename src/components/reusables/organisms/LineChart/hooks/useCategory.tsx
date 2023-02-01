import React, { useEffect, useState } from 'react'
import { IDataInput } from '../types/dataset.type';

const useCategory = (filtering: boolean, data: IDataInput[]) => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!filtering) return;

    let uniqueCategories: string[] = [];

    // populate unique categories
    for (let i = 0; i < data.length; i++) {
      data[i].data.forEach(item => {
        if (!uniqueCategories.includes(item.category || "")) {
          uniqueCategories.push(item.category || "");
        }
      })
    }

    // capitalize categories
    uniqueCategories = uniqueCategories.map(category => category.toUpperCase());

    // store the unique categories to the component state
    setCategories(uniqueCategories);

    // update the active category
    if (uniqueCategories.length > 0)
      setActiveCategory(uniqueCategories[0]);
    else
      setActiveCategory("");
  }, [data]);

  const changeCategory = (category: string) => {
    setActiveCategory(category);
  }

  return { categories, activeCategory, changeCategory }
}

export default useCategory