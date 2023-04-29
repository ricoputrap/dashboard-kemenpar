type TLegendItem = {
  label: string;
  color: string;
}

export const mapColor = (
  categories: string[],
  colors: string[]
): TLegendItem[] => {
  return categories.map((category, index) => {
    return {
      label: category,
      color: colors[index]
    }
  });
}