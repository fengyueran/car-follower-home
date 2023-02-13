import CaseList from "../case-list";

function buildData(offset = 0) {
  return Array(51)
    .fill(0)
    .map((_, i) => {
      return {
        type: "string",
        description: "三行字三行字三行字三行字三行三行字三行字",
        img: "https://i.pinimg.com/236x/7f/24/8c/7f248c9e18abe79de0d6c79617e03361.jpg",
      };
    });
}

const CaseListContainer = () => {
  const data = buildData();
  return <CaseList cases={data} />;
};

export default CaseListContainer;
