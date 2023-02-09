const generateLaporanDesa = (rowData: string) => {
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

  return JSON.stringify(response);
}