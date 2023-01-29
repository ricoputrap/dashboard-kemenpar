type TWilayahLaporan = {
  area: string,
  kab: string,
  kec: string,
  desa: string,
}

export type TLaporan = {
  wilayah: TWilayahLaporan,
  deskripsi: string,
  foto: string[],
  video: string;
  pdf: string;
}

export type TPendampinganDesa = {
  desa: string;
  kec: string;
  kab: string;
  urlProposal: string;
  laporan: TLaporan[];
}

export type TPendampinganDesaPerDPP = {
  dpp: string;
  data: TPendampinganDesa[];
}