import fs from "fs";
import { LOMBOK, TOBA, BTS, BYP, LABUAN_BAJO, WAKATOBI } from "./laporan.js";

const generateLaporanDesa = (rowData) => {
  const data = rowData.split(";");
  const desa = data[2];
  const kec = data[1];
  const kab = data[0];

  return {
    desa,
    kec,
    kab,
    urlProposal: null,
    laporan_1: null,
    laporan_2: null,
    laporan_3: null,
    laporan_4: null,
    laporan_5: null
  }
}

const generateLaporanPerDPP = (dpp, data) => {
  const response = {
    data: {
      dpp
    }
  }

  const allData = data.map(rowData => generateLaporanDesa(rowData));
  response.data.data = allData;

  return response;
}

const generateLaporanSemuaDPP = () => {
  const resultLOMBOK = generateLaporanPerDPP("lombok", LOMBOK);
  fs.writeFileSync("./lombok.json", JSON.stringify(resultLOMBOK, null, 2));

  const resultTOBA = generateLaporanPerDPP("toba", TOBA);
  fs.writeFileSync("./toba.json", JSON.stringify(resultTOBA, null, 2));

  const resultBYP = generateLaporanPerDPP("byp", BYP);
  fs.writeFileSync("./byp.json", JSON.stringify(resultBYP, null, 2));

  const resultBTS = generateLaporanPerDPP("bts", BTS);
  fs.writeFileSync("./bts.json", JSON.stringify(resultBTS, null, 2));

  const resultLABUAN_BAJO = generateLaporanPerDPP("labuan_bajo", LABUAN_BAJO);
  fs.writeFileSync("./labuan_bajo.json", JSON.stringify(resultLABUAN_BAJO, null, 2));

  const resultWAKATOBI = generateLaporanPerDPP("wakatobi", WAKATOBI);
  fs.writeFileSync("./wakatobi.json", JSON.stringify(resultWAKATOBI, null, 2));
}

generateLaporanSemuaDPP();