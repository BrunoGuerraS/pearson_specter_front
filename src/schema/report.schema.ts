import { PersonInvolvedSchema } from "./personInvolved.schema";
import { placeSchema } from "./place.schema";

export const CreateReportschema: ICreateReport = {
  type_report: 0,
  person_involved: [PersonInvolvedSchema],
  place: [placeSchema],
  date_start: null,
  date_end: null,
  evidence: [],
  description: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  answer5: "",
  answer6: "",
  answer7: "",
};
