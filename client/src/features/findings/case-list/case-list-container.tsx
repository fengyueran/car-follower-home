import { useCallback, useEffect, useRef, useState } from "react";

import { CardProps } from "./card";
import CaseList from "./case-list";

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

const data = buildData();

const PAGE_SIZE = 10;

const getCases = async (page: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
  const pageData = data.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  return pageData;
};

interface Props {
  height: number;
  itemSize: number;
}

const CaseListContainer: React.FC<Props> = (props) => {
  const pageRef = useRef(0);
  const [loading, setLoading] = useState(false);
  const [allCasesLoaded, setAllCasesLoaded] = useState(false);
  const [cases, setCases] = useState<CardProps[]>([]);

  const fetchCases = useCallback(async () => {
    setLoading(true);

    const pageData = await getCases(pageRef.current);
    if (pageData.length) {
      pageRef.current++;
      setCases([...cases, ...pageData]);
    } else {
      setAllCasesLoaded(true);
    }

    setLoading(false);
  }, [cases]);

  useEffect(() => {
    fetchCases();
  }, [fetchCases]);

  return (
    <CaseList
      {...props}
      cases={cases}
      loading={loading}
      fetchCases={fetchCases}
      allCasesLoaded={allCasesLoaded}
    />
  );
};

export default CaseListContainer;
