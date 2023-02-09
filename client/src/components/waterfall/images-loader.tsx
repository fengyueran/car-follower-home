import { ScrollView } from "@tarojs/components";
import { getImageInfo, getSystemInfo, pxTransform } from "@tarojs/taro";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { styled } from "linaria/react";

import { Loading } from "./loading";

const cars = [
  {
    id: 0,
    description:
      "Consequatur in ipsa ab sapiente enim. Accusantium aut est voluptas sequi. Quibusdam neque aperiam dolor. Excepturi sunt a minus fuga autem excepturi cupiditate. Fuga aspernatur incidunt aliquid.",
    src: "https://i.pinimg.com/236x/7f/24/8c/7f248c9e18abe79de0d6c79617e03361.jpg",
  },
  {
    id: 1,
    description:
      "Sit qui consequuntur vel quibusdam sit ea sint. Repellendus unde ducimus sed dolor sint iste. Expedita voluptas iste adipisci eos. Impedit dignissimos ratione animi dolorem est.",
    src: "https://i.pinimg.com/236x/a6/cd/0a/a6cd0a15d5b2909539dd7944201127d2.jpg",
  },
  {
    id: 2,
    description:
      "Fugiat deserunt doloremque molestiae veritatis beatae aut. Eveniet voluptas sunt accusamus. Quis quos hic itaque. Eveniet est repellendus. Odit sed sint. Repellendus est et.",
    src: "https://i.pinimg.com/236x/d7/fb/60/d7fb60b2321149a83ab5dbe94744ced6.jpg",
  },
  {
    id: 3,
    description:
      "Quas et fuga eos ducimus reprehenderit necessitatibus. Molestiae fuga maiores nobis id. Id debitis id dignissimos magni repellendus quae. Neque aut officia quia dolorem consequatur facilis esse. Ipsam et in aut est voluptatibus qui labore. Esse qui harum dolores.",
    src: "https://i.pinimg.com/236x/44/d4/c3/44d4c397ff1831222a32620006d3e4ae.jpg",
  },
  {
    id: 4,
    description:
      "Eligendi mollitia est alias molestiae et voluptas ut natus aliquid. Dolorem autem saepe. Accusamus quae quia excepturi iure sint eum vitae. Voluptas rerum soluta rerum ex unde.",
    src: "https://i.pinimg.com/236x/44/cb/7f/44cb7fc19131e851f639f6e24acbdec6.jpg",
  },
  {
    id: 5,
    description:
      "Provident rerum fugiat qui. Soluta eos reiciendis alias rerum et sunt animi commodi. Omnis temporibus quia accusantium laudantium distinctio porro nostrum dolores voluptas. Quibusdam assumenda laudantium exercitationem ipsam. Quia repellendus ut a ea sed recusandae debitis. In velit odit alias quod est nulla maxime est reprehenderit.",
    src: "https://i.pinimg.com/236x/65/aa/58/65aa58f9ec28f1a889a2cce245d23110.jpg",
  },
  {
    id: 6,
    description: "Aliquam laborum sit ipsam. Odit possimus culpa voluptatem.",
    src: "https://i.pinimg.com/236x/3d/90/bc/3d90bc862205b58b4cba9d8ccf2ada3d.jpg",
  },
  {
    id: 7,
    description:
      "Veritatis eum aut officiis ut libero sed accusantium neque mollitia. Quisquam velit ratione adipisci at quos officiis nulla porro. Expedita soluta iure accusamus eius modi accusantium temporibus. Cumque omnis et. Voluptatem officiis labore molestiae nostrum numquam quia. Dolorem itaque et maiores atque beatae.",
    src: "https://i.pinimg.com/236x/6a/b0/d9/6ab0d93ee045cde3a25b5a0a22cd6435.jpg",
  },
  {
    id: 8,
    description:
      "Magnam dolor vel reprehenderit. Tenetur perspiciatis nam rerum quo molestias eligendi itaque atque. Reprehenderit laboriosam qui ipsam dolorum hic. Aut enim odit tempore et sed saepe dignissimos. Praesentium sapiente optio aut consequatur et est. Quaerat nam enim natus consequuntur temporibus.",
    src: "https://i.pinimg.com/236x/0f/41/f6/0f41f6073f27a4c8baf57d26f76b4b9a.jpg",
  },
  {
    id: 9,
    description:
      "Sed et rerum tenetur. Veritatis blanditiis harum aut voluptatem unde quisquam neque ab quod. Doloribus sequi adipisci at quae amet molestiae voluptatem impedit expedita. Iusto nam unde molestiae enim deserunt quos. Quasi voluptatem amet voluptatibus eius et.",
    src: "https://i.pinimg.com/236x/ce/87/3b/ce873bc16d0e03cf21ab687d9d3c8ced.jpg",
  },
  {
    id: 10,
    description:
      "Dicta dolor dolorem repellendus perspiciatis. Voluptates ut consequatur eos quaerat laudantium. Molestias atque magnam tempora numquam molestias distinctio et maxime.",
    src: "https://i.pinimg.com/236x/a1/2b/ab/a12babee7999f15e09d908fb2bcbdf52.jpg",
  },
  {
    id: 11,
    description:
      "Quo eos voluptas expedita incidunt. Non esse explicabo ut voluptates fugit omnis alias. Et non voluptatum repellendus in ut. Qui sunt voluptatem hic aut.",
    src: "https://i.pinimg.com/236x/21/c4/d3/21c4d38cd1401a12add89d309fc7940a.jpg",
  },
  {
    id: 12,
    description:
      "Blanditiis hic nostrum illum culpa quia commodi molestiae ab. Sed esse enim perspiciatis quasi. Nemo maiores delectus quod. Est inventore aut.",
    src: "https://i.pinimg.com/236x/d8/e5/8b/d8e58b3064f8978657f9453a2d981285.jpg",
  },
  {
    id: 13,
    description:
      "Et rem aut in non libero magnam tempora nihil. Iste id maiores quis ut. Qui eum eveniet consequatur saepe praesentium minus eius ad ea. Magnam et temporibus.",
    src: "https://i.pinimg.com/236x/a9/54/d0/a954d0c3d6d1273663688fbe1c137f43.jpg",
  },
  {
    id: 14,
    description:
      "Maxime neque et aut sapiente nesciunt odio vel. Non vero officiis. Facilis occaecati similique voluptate nisi. Sit ab et autem iste enim est in. Hic sunt sapiente autem qui nostrum at iure.",
    src: "https://i.pinimg.com/236x/09/16/e0/0916e0231fc99916097e68ef08c6cdc0.jpg",
  },
  {
    id: 15,
    description:
      "Et id impedit soluta deserunt qui laboriosam exercitationem in. Consequatur qui quae ducimus omnis laboriosam et alias.",
    src: "https://i.pinimg.com/236x/d1/35/a2/d135a2e4595c9c4906cd966e60b5b258.jpg",
  },
  {
    id: 16,
    description:
      "Molestias dolores totam molestiae dolor esse et voluptatem iste. Ea delectus quasi.",
    src: "https://i.pinimg.com/236x/91/7a/bd/917abd60da8e94fd0d47c40b26ffe708.jpg",
  },
  {
    id: 17,
    description:
      "Est in eius eos autem. Doloremque dignissimos ut libero non eaque voluptatibus corrupti totam. Nihil porro dolor dolores eaque rem odit. Saepe optio aut voluptatem ipsa placeat in. Vero neque ea distinctio. Consequatur veniam soluta a maiores nihil omnis deleniti.",
    src: "https://i.pinimg.com/236x/f0/b6/97/f0b69750e29d91d16d65ca8416ae733b.jpg",
  },
  {
    id: 18,
    description:
      "Qui quisquam atque nisi ut natus inventore eos sint. Debitis vitae illo sit expedita. Minima culpa et voluptas sit labore est aut necessitatibus aliquam. Voluptatem corporis nobis qui molestiae cum quasi voluptas sapiente.",
    src: "https://i.pinimg.com/236x/3e/b4/3b/3eb43ba65ff82d73789efe17f578dc01.jpg",
  },
  {
    id: 19,
    description:
      "Ut soluta velit. Tempore vel qui natus laboriosam voluptatem quo pariatur non. Reiciendis aut tempore dolores voluptas dolores. Assumenda est sed qui dolore nulla officia nemo aut iusto.",
    src: "https://i.pinimg.com/236x/11/7a/6e/117a6e2927fe1570b9adc368c56a8ec3.jpg",
  },
  {
    id: 20,
    description:
      "Qui voluptatem quia officiis eaque explicabo. Iste dolor eligendi nostrum sit.",
    src: "https://i.pinimg.com/236x/fa/5c/10/fa5c10edc931449a4ddbfe6b9d586d2a.jpg",
  },
  {
    id: 21,
    description:
      "Distinctio modi maiores velit inventore autem nihil. Sed suscipit voluptas enim numquam beatae quis sint. Ut ut saepe eum reiciendis.",
    src: "https://i.pinimg.com/236x/f8/5a/6b/f85a6b268ff3414bdb138646a452a694.jpg",
  },
  {
    id: 22,
    description:
      "Accusantium qui natus. Corrupti dignissimos eligendi dolores. Dolorum in quos est qui.",
    src: "https://i.pinimg.com/236x/da/3f/83/da3f83eeb605e15eb4c1f125dc21a166.jpg",
  },
  {
    id: 23,
    description:
      "Sint harum beatae sit. Eaque aut qui qui maxime ut. Saepe et quasi.",
    src: "https://i.pinimg.com/236x/3f/ea/d6/3fead6de23b01bc12f45e5a5516bfd51.jpg",
  },
  {
    id: 24,
    description:
      "Et esse quam nostrum culpa neque id. Placeat nemo similique expedita. Quos quae quae et odit dolores.",
    src: "https://i.pinimg.com/236x/37/12/2e/37122e4159c30f7357c10fd10e89df33.jpg",
  },
  {
    id: 25,
    description:
      "Molestias quas dolor et possimus. Laboriosam recusandae atque veniam explicabo quis cumque asperiores omnis vitae. Tempora sint illo similique. Cum aspernatur tempore eligendi harum aperiam qui et eius. Quisquam ea accusantium voluptates enim. Est culpa sed voluptatibus et inventore similique expedita.",
    src: "https://i.pinimg.com/236x/4b/47/9d/4b479da98b733dfdd6e77da226c574c8.jpg",
  },
  {
    id: 26,
    description:
      "Voluptatem est totam aspernatur veritatis ad et incidunt qui. Rerum maxime neque officia cumque voluptatem. Ad nihil velit illum voluptatibus. Reprehenderit occaecati voluptas ut unde.",
    src: "https://i.pinimg.com/236x/2c/f3/18/2cf31837d7f18b6ae4f6009c6375f8bd.jpg",
  },
  {
    id: 27,
    description:
      "Fugit sapiente voluptatem recusandae. Aspernatur excepturi modi. Quas dolor autem aliquid error et quae commodi quis consectetur. Rerum eos et natus aliquid quia sit est non aperiam.",
    src: "https://i.pinimg.com/236x/22/b8/79/22b8798fcc2d33a705ef162308fdc286.jpg",
  },
  {
    id: 28,
    description:
      "Pariatur dignissimos inventore ullam nulla adipisci nostrum voluptatem voluptatibus. Eius asperiores et earum possimus optio nobis. Possimus sunt minus voluptas sed. Aut reiciendis vel sed officiis ea corrupti veritatis odit odit. Excepturi qui et laborum quia.",
    src: "https://i.pinimg.com/236x/d8/44/72/d844725ad8295a7f6d0d66b764ab239a.jpg",
  },
  {
    id: 29,
    description:
      "Dolore labore quasi explicabo qui eum similique dignissimos voluptas. Tempore non culpa ducimus explicabo et illo perspiciatis. Eligendi dolores corrupti asperiores consectetur. Doloribus nulla debitis assumenda eos quo aliquam enim beatae aut.",
    src: "https://i.pinimg.com/236x/8d/c4/7b/8dc47b2bb33f302ffd1a3742223cefc2.jpg",
  },
  {
    id: 30,
    description:
      "Tempora in voluptas et quasi laborum quidem corporis maiores. Fuga quia consequuntur exercitationem. Nulla beatae et sed. Veniam illo labore magni ut corporis.",
    src: "https://i.pinimg.com/236x/eb/78/7b/eb787b84a432329896575aecdc3b20cd.jpg",
  },
  {
    id: 31,
    description:
      "Ratione et est similique autem corrupti enim dicta exercitationem consectetur. Occaecati consequatur non iure repellendus quibusdam sit voluptate ut. Quibusdam voluptate harum doloribus. Omnis esse iusto modi. Necessitatibus aut possimus vel optio quod ut quae nihil reiciendis. Qui esse reiciendis.",
    src: "https://i.pinimg.com/236x/f8/0d/3d/f80d3d8c4c3bed1d99a70b2ec78f74bb.jpg",
  },
  {
    id: 32,
    description:
      "Tempora ad temporibus repudiandae asperiores repellendus adipisci voluptatibus est consequatur. Itaque voluptate eius. Eum voluptatibus aut nobis. Eveniet necessitatibus architecto alias ab. Animi quasi sit esse sed adipisci nihil et sint odit.",
    src: "https://i.pinimg.com/236x/e0/c3/0d/e0c30d9dcb626db6058220bfaf7fb7a2.jpg",
  },
  {
    id: 33,
    description:
      "Doloremque aspernatur illo repudiandae. Voluptate non aliquam voluptatibus rerum eaque repellendus eius. Eligendi quia facilis non doloribus. Nesciunt officiis sed necessitatibus dolorem aut voluptas.",
    src: "https://i.pinimg.com/236x/b7/1a/09/b71a09aec5c36e3ac5d4919ca3b34076.jpg",
  },
  {
    id: 34,
    description:
      "Nihil impedit tempora reiciendis assumenda quam rem. Nihil sed velit libero eum laudantium provident consequatur dolores consectetur. Recusandae rerum soluta pariatur officia perspiciatis numquam in. Qui a voluptatibus vero. Commodi pariatur fuga voluptatibus consequatur ullam. Beatae et tempora repudiandae at est fuga perspiciatis debitis.",
    src: "https://i.pinimg.com/236x/95/19/dd/9519dd364268b8943253c74c01afe5f3.jpg",
  },
  {
    id: 35,
    description:
      "Quam molestiae perspiciatis impedit vitae. Sunt voluptas quidem aliquid.",
    src: "https://i.pinimg.com/236x/af/2e/fa/af2efa848346acbb002bf57218d22a7c.jpg",
  },
  {
    id: 36,
    description:
      "Minus eum aut ipsa quas. Sed sit aut ducimus aliquam corporis praesentium omnis. Qui nemo vero voluptatem ad praesentium quia. Sed voluptas quasi qui dolorem non facere sint maxime. Cumque aut totam.",
    src: "https://i.pinimg.com/236x/d5/38/72/d5387228bafbfa6e0b1a05145e2dec22.jpg",
  },
  {
    id: 37,
    description:
      "Atque natus tenetur necessitatibus et dolor sed rem consectetur. Temporibus beatae maiores eaque atque perferendis suscipit voluptates odit sed. Ut perferendis voluptatem. Non odio necessitatibus accusantium harum eligendi numquam molestiae deserunt omnis.",
    src: "https://i.pinimg.com/236x/40/b8/4a/40b84ac7bbbf974fceb039a958a9216d.jpg",
  },
  {
    id: 38,
    description:
      "Aliquid delectus quae quis est possimus. Doloremque magni mollitia ad et suscipit incidunt modi. Eum placeat voluptas dolorum tempore consequuntur ea omnis voluptate. Inventore aut incidunt rerum laborum architecto enim. Ad id qui nam reiciendis in ut accusamus.",
    src: "https://i.pinimg.com/236x/7c/ba/43/7cba437e3769a83ea995ed2ea1fcc03f.jpg",
  },
  {
    id: 39,
    description:
      "Dolores nobis ut asperiores natus vel et. Rerum non est voluptatibus placeat eum omnis magnam. Autem nostrum ut qui magni quasi expedita.",
    src: "https://i.pinimg.com/236x/1b/3b/c4/1b3bc49438eedf350be23a748423cbee.jpg",
  },
  {
    id: 40,
    description:
      "Sit eum nobis et a culpa sint ad. Veniam maiores quasi harum sequi nisi quia perspiciatis consequatur qui. Iste natus ducimus dolorum ducimus hic aliquid unde ipsa.",
    src: "https://i.pinimg.com/236x/31/72/e2/3172e2cde2b9018c8830d91bee0d77a0.jpg",
  },
  {
    id: 41,
    description:
      "Culpa facere architecto et est sequi ut similique id. Iure enim nesciunt ab eum reiciendis aut molestias veritatis. Voluptatem est animi facere alias reprehenderit unde ex. Eaque similique a totam odit sit ab esse. Reiciendis dolorem quasi fugit.",
    src: "https://i.pinimg.com/236x/dd/ca/97/ddca97ddbb7a07df82548f64be635276.jpg",
  },
  {
    id: 42,
    description: "Facere eius quis. Earum qui quibusdam.",
    src: "https://i.pinimg.com/236x/85/a5/17/85a5172a45f6f80be0078ab13dbd17fd.jpg",
  },
  {
    id: 43,
    description:
      "Omnis recusandae totam id dolores. Adipisci nostrum eos animi corrupti dolorum dignissimos quae. Ex minus ratione est voluptates voluptatem eaque sed enim. Ipsa rem et.",
    src: "https://i.pinimg.com/236x/68/d0/56/68d05619bf1f2ef0a7e8ea4f076b08d2.jpg",
  },
  {
    id: 44,
    description:
      "Ab veritatis ea. Id debitis odit quos. Et velit repellat porro molestiae. Blanditiis magnam atque libero. Deserunt unde iure soluta dolores. Sunt ipsam rerum molestias id ut.",
    src: "https://i.pinimg.com/236x/e4/01/38/e40138e42ba1201b3f73412f526b6cb2.jpg",
  },
  {
    id: 45,
    description:
      "Quia officia pariatur esse impedit. Quia et iure dolor sed fuga. Nobis harum et atque aut rerum perferendis occaecati ea odio. Odit ea quos vel laudantium impedit sit minus esse dolor.",
    src: "https://i.pinimg.com/236x/70/84/f6/7084f61728dd27bf1755124b560114a6.jpg",
  },
  {
    id: 46,
    description:
      "Enim doloremque quo quia rerum voluptatem pariatur numquam quis. Vero et blanditiis incidunt veniam exercitationem aspernatur dolor. Mollitia et debitis qui aut quia eaque. Quis nemo sed optio odio.",
    src: "https://i.pinimg.com/236x/1c/11/53/1c1153c4fdad439ea7cdb90d181cda66.jpg",
  },
  {
    id: 47,
    description: "Sed nisi odio. Temporibus reprehenderit officiis nemo.",
    src: "https://i.pinimg.com/236x/46/99/c8/4699c803a6577db55ffc7726c3a0bdb5.jpg",
  },
  {
    id: 48,
    description:
      "Eveniet iure quia est modi. Consequatur harum et et eum in voluptas ipsum.",
    src: "https://i.pinimg.com/236x/44/2f/b4/442fb435dfe1ba7ee31c1ee771e5fa01.jpg",
  },
  {
    id: 49,
    description:
      "Ad aut sint odio blanditiis blanditiis sit. Iure modi quisquam et. Qui odio labore voluptas repellat qui aut. Ut neque voluptatibus. Suscipit qui quo et cum accusantium.",
    src: "https://i.pinimg.com/236x/fc/87/87/fc87877e88dda802ea41c6a3cc1f75d4.jpg",
  },
];

const StyledScrollView = styled(ScrollView)`
  height: 100%;
`;

interface CarInfo {
  id: number;
  src: string;
  description: string;
}

interface ImgInfo {
  width: number;
  height: number;
  path?: string;
}

type CarInfoWithImgPath = CarInfo & { path?: string };

const getWindowWidth = (() => {
  let windowWidth;
  return () => {
    if (windowWidth) return windowWidth;
    return new Promise((reslove) => {
      getSystemInfo({
        success: (res) => {
          windowWidth = res.windowWidth;
          reslove(windowWidth);
        },
      });
    });
  };
})();

const calcImgHeight = async (imgInfo: ImgInfo) => {
  const oImgW = imgInfo.width;
  const oImgH = imgInfo.height;
  const windowWidth = await getWindowWidth();
  const rtp = windowWidth / 750;
  const imgWidth = +pxTransform(394).replace("rpx", ""); //图片设置的宽度px，设计给

  const scale = +imgWidth / (oImgW / rtp);

  const imgHeight = (oImgH * scale) / rtp;

  return imgHeight;
};

const getImgInfo = (src: string): Promise<ImgInfo> => {
  return new Promise((resolve) => {
    getImageInfo({
      src,
      success(res) {
        resolve(res);
      },
      fail(e) {
        console.error("getImgInfo error", e);
        resolve({
          width: 200,
          height: 200,
        });
      },
    });
  });
};

interface Props {
  pageSize: number;
  children: React.ReactElement;
}

export const ImagesLoader: React.FC<Props> = ({ pageSize, children }) => {
  const allLoadedImgs = useRef<CarInfoWithImgPath[]>([]);
  const currentPageLoadedImgs = useRef<CarInfoWithImgPath[]>([]);
  const currentPage = useRef<number>(0);

  const [currentPageCards, setCurrentPageCards] = useState<CarInfo[]>(
    cars.slice(currentPage.current, pageSize)
  );

  const [loading, setLoading] = useState(true);

  const onScrollToLower = useCallback(() => {
    if (!loading) {
      currentPage.current++;
      setCurrentPageCards(
        cars.slice(
          currentPage.current * pageSize,
          (currentPage.current + 1) * pageSize
        )
      );
    }
  }, [pageSize, loading]);

  useEffect(() => {
    const start = async () => {
      const loadedImgs = await Promise.all(
        currentPageCards.map((c) => getImgInfo(c.src))
      );

      const loadedImgHeights = await Promise.all(
        loadedImgs.map((imgInfo) => calcImgHeight(imgInfo))
      );

      currentPageLoadedImgs.current = currentPageCards.map(
        (cardInfo, index) => {
          const height = loadedImgHeights[index];
          return { ...cardInfo, height };
        }
      );

      allLoadedImgs.current = [
        ...allLoadedImgs.current,
        ...currentPageLoadedImgs.current,
      ];
      setLoading(false);
    };

    if (currentPageCards.length) {
      setLoading(true);
      start();
    }
  }, [currentPageCards]);

  return (
    <StyledScrollView scrollY onScrollToLower={onScrollToLower}>
      {React.cloneElement(children, { items: allLoadedImgs.current })}
      {loading && <Loading />}
    </StyledScrollView>
  );
};
