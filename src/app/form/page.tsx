"use client";
import { registerReport } from "@/service/handlerData";
import { Button, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { reportFormValuesToRPersistAdapter } from "./adapters/reportAdapter";
import { DateEvent } from "./components/DateEvent";
import { Description } from "./components/Description";
import { EvidenceAria } from "./components/EvidenceAria/EvidenceAria";
import { OptionalQuestions } from "./components/OptionalQuestions";
import { PersonInvolved } from "./components/PersonInvolved";
import { Places } from "./components/Places";
import { TypeReport } from "./components/TypeReport";
import { reportFormConfig } from "./config/reportFormConfig";

export default function Form() {
  const method = useForm(reportFormConfig);
  const { handleSubmit, reset } = method;

  const onSubmit = async (data: any) => {
    const parseData = reportFormValuesToRPersistAdapter(data)
    try {
      // console.log("parseData", parseData);
      console.log("data", data);
      const res = await registerReport(parseData)
      console.log(res);
      reset();
    } catch (error) {
      console.log(error);
      reset();
    }
    reset();
  };

  return (
    <FormProvider {...method}>
      <form style={{margin: "40px 0"}} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TypeReport />
          <PersonInvolved />
          <Places />
          <DateEvent />
          <Description />
          <EvidenceAria />
          <OptionalQuestions />
          {/* <ContactOptions /> */}
          <Button type="submit" variant="contained">
            SEND
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
