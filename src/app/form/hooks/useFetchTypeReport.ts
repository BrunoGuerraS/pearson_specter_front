import { ITypeReport } from "@/interfaces/ITypeReport";
import { getTypeReport } from "@/service/handlerData";
import { useEffect, useState } from "react";

export const useFetchTypeReport = () => {
  const [typesReportList, setTypesReportList] = useState<ITypeReport[]>([]);
  const fechData = async () => {
    const { data } = await getTypeReport();
    console.log("data", data)
    setTypesReportList(data);
  };
  useEffect(() => {
    try {
      fechData();
    } catch (error) {}
  }, []);
  return { typesReportList };
};
