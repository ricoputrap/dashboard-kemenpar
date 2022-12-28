const categories = ["Toba", "BYP", "BTS", "Lombok", "Labuan Bajo", "Wakatobi"]

const generateDummyData = (categories) => {
  let data = [];

  categories.forEach(category => {
    for (let i = 1; i < 13; i++) {
      const dataPoint = {
        label: `Hotel ${i}`,
        value: Math.floor(Math.random() * 3000),
        category
      }

      data.push(dataPoint)
    }
  });

  return data;
}