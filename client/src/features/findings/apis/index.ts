import Taro from "@tarojs/taro";

export const PAGE_SIZE = 10;

export const getCarsCount = async () => {
  const db = Taro.cloud.database();
  const { total } = await db.collection("cars").count();
  return total;
};

export const fetchCars = (page: number) => {
  const db = Taro.cloud.database();
  return db
    .collection("cars")
    .skip(page * PAGE_SIZE)
    .limit(PAGE_SIZE)
    .get();
};
