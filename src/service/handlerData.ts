const url = 'http://localhost:3003/api/v1';

export const getTypeReport = async () => {
    const response = await fetch(`${url}/typeReports`);
    const typeReportList = await response.json();
    return typeReportList
}