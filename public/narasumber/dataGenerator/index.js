import data from "./data.js";
import fs from "node:fs";

const computedData = data.reduce((result, rowData) => {
  const details = rowData.split(";");
  const newData = {
    nama: details[0],
    institusi: details[1],
    domisili: details[2]
  };
  return [...result, newData]
}, []);

const jsonFile = JSON.stringify({ data: computedData }, null, 2);

fs.writeFile("tableData.json", jsonFile, function(err) {
  if (err) {
      console.log(err);
  }
});