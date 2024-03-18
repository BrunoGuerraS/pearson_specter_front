import axios from "axios";
const url = "http://localhost:3003/api/v1";

export const getTypeReport = () => {
  return axios.get(`${url}/typeReports`);
};

export const registerReport = async (data: any) => {
  console.log("data =>", data);
  debugger;
  const response = await axios.post(`${url}/reports`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("response ===>", response);
  return response;
};

export const getReportById = (id: string) => {
  return axios.get(`${url}/reports/${id}`);
};
