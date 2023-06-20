type TMediaSosialItem = {
  id: string;
  jumlah: string;
  url: string;
}

type TJangkauanMediaItem = {
  dpp: string;
  jumlah: number;
}

export type TResponseMediaOnline = {
  list: TMediaSosialItem[];
  jangkauan_media: {
    url: string;
    data: TJangkauanMediaItem[];
  }
}