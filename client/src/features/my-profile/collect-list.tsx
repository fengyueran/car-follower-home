import CaseList from "src/features/findings/case-list";

interface Props {
  height: number;
  itemSize: number;
}

const CollectList: React.FC<Props> = (props) => {
  return <CaseList {...props} />;
};

export default CollectList;
