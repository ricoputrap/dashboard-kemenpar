type TWilayahLaporan = {
  area: string,
  kab: string,
  kec: string,
  desa: string,
}

type TLaporan = {
  wilayah: TWilayahLaporan,
  deskripsi: string,
  foto: string[],
  video: string;
  pdf: string;
}

type TPendampinganDesa = {
  desa: string;
  kec: string;
  kab: string;
  urlProposal: string;
  laporan: TLaporan[];
}