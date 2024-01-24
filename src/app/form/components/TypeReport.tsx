"use client";
import { ErrorAlert } from "@/components/ErrorAlert";
import { SectionForm } from "@/components/SectionForm";
import { ITypeReport } from "@/interfaces/ITypeReport";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { FC, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useFetchTypeReport } from "../hooks/useFetchTypeReport";

export const TypeReport: FC = () => {
  const { register } = useFormContext();
  const { typesReportList } = useFetchTypeReport();
  const [currentTypeReport, setCurrentTypeReport] = useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setCurrentTypeReport(event.target.value as string);
  };

  return (
    <SectionForm titleSection={"INFORMACIÓN SOBRE EL REPORTE*"}>
      <FormControl variant="standard" fullWidth>
        <InputLabel>Type Report</InputLabel>
        <Select
          {...register("type_report", {
            validate: (value) => {
              return value !== 0;
            },
          })}
          label="Type Report"
          value={currentTypeReport}
          onChange={handleChange}
        >
          {typesReportList &&
            typesReportList.map((typeReport: ITypeReport) => {
              return (
                <MenuItem key={typeReport.id} value={typeReport.id}>
                  {typeReport.name}
                </MenuItem>
              );
            })}
        </Select>
        <ErrorAlert inputName={"type_report"} />
      </FormControl>
    </SectionForm>
  );
};
