import axios from "axios";
const url = "http://localhost:3003/api/v1";

export const getTypeReport = () => {
  return axios.get(`${url}/typeReports`);
};

export const registerReport = async (data: any) => {
  const response = await axios.post(`${url}/reports`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const confirmation = response.data
  return confirmation
  // const response = await fetch(`${url}/reports`, {
  //   method: "POST",
  //   body: data,
  // });
  // const report = await response.json();
  // return report;
};

export const getReportById = (id: string) => {
  return axios.get(`${url}/reports/${id}`);
};
