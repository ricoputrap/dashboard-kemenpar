import { TResponseMediaOnline } from "../../../../API/publikasi/types/media-online.types";
import { TListData, TMediaOnline } from "../../state/index.types";
import initialDataMediaOnline from "../../state/initialData/initialDataMediaOnline";

const computeDataMediaOnline = (data: TResponseMediaOnline): TMediaOnline => {
  const { list, jangkauan_media } = data;

  const listMediaOnline: TListData[] = list.map(item => ({
    label: item.id,
    value: item.jumlah,
    url: item.url
  }));

  const jangkauanMedia: TMediaOnline["jangkauanMedia"] = {
    ...initialDataMediaOnline.jangkauanMedia,
    url: jangkauan_media.url
  }

  jangkauan_media.data.forEach(item => {
    jangkauanMedia.labels.push(item.dpp.toUpperCase());
    jangkauanMedia.dataset.data.push(item.jumlah);
  });

  return {
    list: listMediaOnline,
    jangkauanMedia
  }
}

export default computeDataMediaOnline;