import { TResponseSectionFive, TTopListMediaItem } from "../../../../API/publikasi/types/section-five.types";
import { TBarDataPublikasi, TSectionFive } from "../../state/index.types";

const computeDataSectionFive = (data: TResponseSectionFive): TSectionFive => {
  const { media_elektronik, media_luar_ruang, top_list_media, website } = data;

  const mediaElektronik: TSectionFive["mediaElektronik"] = {
    url: media_elektronik.url,
    data: media_elektronik.data.map(item => ({
      label: item.id,
      value: item.jumlah
    }))
  }

  const mediaLuarRuang: TBarDataPublikasi = {
    labels: [],
    dataset: {
      label: "Jumlah Media",
      data: [],
      backgroundColor: "#EAC170"
    },
    url: media_luar_ruang.url
  }
  const topListMedia: TBarDataPublikasi = {
    labels: [],
    dataset: {
      label: "Jumlah Berita",
      data: [],
      backgroundColor: "#EAC170"
    },
    url: top_list_media.url
  }
  const websiteArticles: TSectionFive["website"] = {
    data: [],
    url: website.url
  }

  media_luar_ruang.data.forEach(item => {
    mediaLuarRuang.labels.push(item.dpp.toUpperCase());
    mediaLuarRuang.dataset.data.push(item.jumlah);
  });

  const sortedList: TTopListMediaItem[] = [...top_list_media.data];
  sortedList.sort((a, b) => b.jumlah - a.jumlah);

  const topFiveMedia: TTopListMediaItem[] = sortedList.slice(0, 5);

  topFiveMedia.forEach(item => {
    topListMedia.labels.push(item.id);
    topListMedia.dataset.data.push(item.jumlah);
  });
  website.data.forEach((item, index) => {
    websiteArticles.data.push({
      no: index + 1,
      title: item.title,
      link: item.url
    });
  })

  return {
    mediaElektronik,
    mediaLuarRuang,
    topListMedia,
    website: websiteArticles
  }
}

export default computeDataSectionFive;