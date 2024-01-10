"use client";
import { getTypeReport } from "@/service/handlerData";
import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { DateEvent } from "./components/DateEvent";
import { Description } from "./components/Description";
import { EvidenceAria } from "./components/EvidenceAria/EvidenceAria";
import { PersonInvolved } from "./components/PersonInvolved";
import { Places } from "./components/Places";
import { TypeReport } from "./components/TypeReport";

type personInvolved = {
  name: string;
  last_name: string;
  role: string;
  company: string;
  otros: string;
};

export default function Form() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      type_report: 0,
      person_involved: [
        {
          name: "",
          last_name: "",
          role: "",
          company: "",
          otros: "",
        },
      ],
      place: [
        {
          name: "",
        },
      ],
      date_start: null,
      date_end: null,
    },
  });
  const {
    fields: fieldsPersonInvolved,
    append: appendPersonInvolved,
    remove: removePersonInvolved,
  } = useFieldArray({
    name: "person_involved",
    control,
  });
  const {
    fields: fieldsPlace,
    append: appendPlace,
    remove: removePlace,
  } = useFieldArray({
    name: "place",
    control,
  });
  const [typeRerportList, setTypeReportList] = useState([]);
  const [typeReport, setTypeReport] = useState("-");

  const onSubmit = (data: any) => {
    console.log("data", data);
    console.log("typeReport ", typeReport);
  };
  useEffect(() => {
    const getReport = async () => {
      const data = await getTypeReport();
      setTypeReportList(data);
    };
    getReport();
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TypeReport
            register={register}
            typeReport={typeReport}
            setTypeReport={setTypeReport}
            typeRerportList={typeRerportList}
          />
          <PersonInvolved
            filds={fieldsPersonInvolved}
            append={appendPersonInvolved}
            remove={removePersonInvolved}
            register={register}
          />
          <Places
            filds={fieldsPlace}
            append={appendPlace}
            remove={removePlace}
            register={register}
          />
          <DateEvent ControlComponent={Controller} control={control} />
          <Description register={register} />
          <EvidenceAria register={register} watch={watch} setValue={setValue} />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
}
