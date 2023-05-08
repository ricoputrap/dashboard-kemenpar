type TMediaElektronikItem = {
  id: string;
  jumlah: number;
}
type TMediaLuarRuangItem = {
  dpp: string;
  jumlah: number;
}
type TTopListMediaItem = {
  id: string;
  jumlah: number;
}
type TWebsiteArticleItem = {
  title: string;
  url: string;
}

export type TResponseSectionFive = {
  media_elektronik: {
    url: string;
    data: TMediaElektronikItem[];
  },
  media_luar_ruang: {
    url: string;
    data: TMediaLuarRuangItem[];
  },
  top_list_media: {
    url: string;
    data: TTopListMediaItem[];
  },
  website: {
    url: string;
    data: TWebsiteArticleItem[];
  }
}
