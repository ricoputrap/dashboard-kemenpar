import { TResponseSectionThree } from "../../../../API/publikasi/types/section-three.types";
import { TSectionThree } from "../../state/index.types";

const computeDataSectionThree = (data: TResponseSectionThree): TSectionThree => {
  const { podcast_wonderful_indonesia, user_generated_content } = data;

  return {
    podcastWonderfulIndonesia: podcast_wonderful_indonesia,
    userGeneratedContent: user_generated_content
  }
}

export default computeDataSectionThree;