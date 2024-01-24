export const reportFormValuesToRPersistAdapter = (data: any) => {
  const formData = new FormData();
  formData.append("person_involved", JSON.stringify(data.person_involved));
  formData.append("place", JSON.stringify(data.place));
  data.evidence.forEach((evidence: File) => {
    formData.append("evidence", evidence);
  });
  Object.keys(data).forEach((key) => {
    if (key !== "person_involved" && key !== "place" && key !== "evidence") {
      formData.append(key, data[key]);
    }
  });
  return formData;
};
