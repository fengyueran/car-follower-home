import * as fs from "fs-extra";

function buildCars() {
  return Array(51)
    .fill(0)
    .map((_, i) => {
      return JSON.stringify({
        name: `极氪00${i}`,
        type: i % 2 === 0 ? "unit" : "car",
        description: "三行字三行字三行字三行字三行三行字三行字",
        img: "https://i.pinimg.com/236x/7f/24/8c/7f248c9e18abe79de0d6c79617e03361.jpg",
      });
    })
    .join("\n");
}

const createCars = () => {
  const cars = buildCars();
  fs.writeFile("car.json", cars);
};
createCars();
