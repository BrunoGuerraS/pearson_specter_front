"use client";
// import { AxiosInterceptor } from "@/interceptors/axios.interceptor";
import { PersonInvolvedSchema } from "@/schema/personInvolved.schema";
import { placeSchema } from "@/schema/place.schema";
import { registerReport } from "@/service/handlerData";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { reportFormValuesToRPersistAdapter } from "./adapters/reportAdapter";
import { ContactOptions } from "./components/ContactOptions";
import { DateEvent } from "./components/DateEvent";
import { Description } from "./components/Description";
import { EvidenceAria } from "./components/EvidenceAria/EvidenceAria";
import { OptionalQuestions } from "./components/OptionalQuestions";
import { PersonInvolved } from "./components/PersonInvolved";
import { Places } from "./components/Places";
import { TypeReport } from "./components/TypeReport";

// AxiosInterceptor();

export default function Form() {
  const router = useRouter();
  const method = useForm({
    defaultValues: {
      person_involved: [PersonInvolvedSchema],
      place: [placeSchema],
    },
  });
  const { handleSubmit, reset } = method;

  const onSubmit = async (data: any) => {
    const parseData = reportFormValuesToRPersistAdapter(data);
    try {
      console.log("data", data);
      const res = await registerReport(parseData);
      if (res.status === 201) {
        const id = res.data.newReport.id_client;
        router.push(`/success/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
    console.log("data", data);
    // reset();
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
