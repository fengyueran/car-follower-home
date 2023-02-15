import { useCallback, useEffect, useRef, useState } from "react";

import { CardProps } from "./card";
import CaseList from "./case-list";
import { getCarsCount, fetchCars, PAGE_SIZE } from "../apis";

const getCases = async (page: number) => {
  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(1);
  //   }, 1000);
  // });
  const res = await fetchCars(page);
  const pageData = res.data as CardProps[];
  return pageData;
};

interface Props {
  height: number;
  itemSize: number;
}

const CaseListContainer: React.FC<Props> = (props) => {
  const pageRef = useRef(0);
  const pageCountRef = useRef<number>();
  const [loading, setLoading] = useState(false);
  const [allCasesLoaded, setAllCasesLoaded] = useState(false);
  const [cases, setCases] = useState<CardProps[]>([]);

  const fetchCases = useCallback(async () => {
    setLoading(true);
    try {
      if (pageCountRef.current === undefined) {
        const total = await getCarsCount();
        pageCountRef.current = Math.ceil(total / PAGE_SIZE);
      }

      const pageData = await getCases(pageRef.current);
      if (pageData.length) {
        setCases([...cases, ...pageData]);
      }
      if (pageCountRef.current === pageRef.current) {
        setAllCasesLoaded(true);
      }
      pageRef.current++;
    } catch (err) {
      console.error("fetch case error", err);
    } finally {
      setLoading(false);
    }
  }, [cases]);

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
