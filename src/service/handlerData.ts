const url = "http://localhost:3003/api/v1";

export const getTypeReport = async () => {
  const response = await fetch(`${url}/typeReports`);
  const typeReportList = await response.json();
  return typeReportList;
};

export const registerReport = async (data: any) => {
    function showFormDataValues(parseData: any) {
      for (let pair of parseData.entries()) {
        console.log(`Key: ${pair[0]}, Value: ${pair[1]}`);
      }
    }
    showFormDataValues(data);
  const response = await fetch(`${url}/reports`, {
    method: "POST",
    body: data,
  });
  const report = await response.json();
  return report;
};
