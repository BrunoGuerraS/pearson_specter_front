export const reportPersonConfig = {
  name: "",
  last_name: "",
  role: "",
  company: "",
};

export const reportEvidenceConfig = {
  name: "",
};

export const reportFormConfig = {
  defaultValues: {
    type_report: 0,
    person_involved: [reportPersonConfig],
    place: [reportEvidenceConfig],
    date_start: null,
    date_end: null,
    evidence: [],
  },
};
