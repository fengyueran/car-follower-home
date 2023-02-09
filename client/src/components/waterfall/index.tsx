import { MasonryLayout } from "./masonry-layout";
import { ImagesLoader } from "./images-loader";
import { Item } from "./item";

export const Waterfall = () => {
  return (
    <ImagesLoader pageSize={10}>
      <MasonryLayout renderItem={(v) => <Item {...v} />} />
    </ImagesLoader>
  );
};
