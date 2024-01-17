"use client";
import { SectionForm } from "@/components/SectionForm";
import { getTypeReport } from "@/service/handlerData";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export const TypeReport = () => {
  const { register } = useFormContext();
  const [typeRerportList, setTypeReportList] = useState([]);
  const [typeReport, setTypeReport] = useState("-");
  const handleChange = (event: SelectChangeEvent) => {
    setTypeReport(event.target.value as string);
  };
  useEffect(() => {
    const getReport = async () => {
      const data = await getTypeReport();
      setTypeReportList(data);
    };
    getReport();
  }, []);
  return (
    <SectionForm TitleSection={"INFORMACIÓN SOBRE EL REPORTE*"}>
      <FormControl variant="standard" fullWidth>
        <InputLabel id="type_report_label">Type Report</InputLabel>
        <Select
          label="Age"
          {...register("type_report")}
          labelId="type_report_label"
          value={typeReport}
          onChange={handleChange}
          sx={{
            minWidth: "200px"
          }}
        >
          <MenuItem value="-">-</MenuItem>

          {typeRerportList &&
            typeRerportList.map((item: any, index: number) => {
              return (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </SectionForm>
  );
};
