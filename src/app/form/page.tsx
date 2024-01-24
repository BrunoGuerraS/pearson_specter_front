"use client";
import { AxiosInterceptor } from "@/interceptors/axios.interceptor";
import { registerReport } from "@/service/handlerData";
import { Button, Stack } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { ContactOptions } from "./components/ContactOptions";
import { DateEvent } from "./components/DateEvent";
import { Description } from "./components/Description";
import { EvidenceAria } from "./components/EvidenceAria/EvidenceAria";
import { OptionalQuestions } from "./components/OptionalQuestions";
import { PersonInvolved } from "./components/PersonInvolved";
import { Places } from "./components/Places";
import { TypeReport } from "./components/TypeReport";
import { reportFormConfig } from "./config/reportFormConfig";

AxiosInterceptor();

export default function Form() {
  const method = useForm(reportFormConfig);
  const { handleSubmit, reset } = method;

  const onSubmit = async (data: any) => {
    // const parseData = reportFormValuesToRPersistAdapter(data);
    try {
      console.log("data", data);
      const res = await registerReport(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log("data", data);
    reset();
  };

  return (
    <FormProvider {...method}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: "980px",
            marginTop: {
              xs: "20px",
              sm: "50px",
            },
            width: {
              sm: "70%",
            },
            padding: {
              xs: "0 20px",
              sm: "0",
            },
          }}
        >
          <TypeReport />
          <PersonInvolved />
          <Places />
          <DateEvent />
          <Description />
          <EvidenceAria />
          <OptionalQuestions />
          <ContactOptions />
          <Button type="submit" variant="contained">
            SEND
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}
