"use client";
import { ErrorAlert } from "@/components/ErrorAlert";
import { SectionForm } from "@/components/SectionForm";
import { Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

export const DateEvent = () => {
  const { control } = useFormContext();
  return (
    <>
      <SectionForm
        titleSection={"INDIQUE LA FECHA EN LA QUE OCURRIÓ EL SUCCESO"}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box>
            <Controller
              name="date_start"
              control={control}
              defaultValue={null}
              rules={{ required: "Please select a date" }}
              render={({ field: { ref, onChange, ...field } }: any) => (
                <DatePicker
                  label="Date-star"
                  inputRef={ref}
                  onChange={(e) => {
                    const format = e
                      ? dayjs(e as Dayjs).format("YYYY-MM-DD")
                      : "";
                    onChange(format);
                  }}
                  sx={{
                    width: { xs: "100% !important", sm: "auto !important" },
                    marginBottom: { xs: "20px !important", sm: "0 !important" },
                    marginRight: { sm: "20px !important" },
                  }}
                />
              )}
            />
            <ErrorAlert inputName={"date_start"} />
          </Box>
          <Box>
            <Controller
              name="date_end"
              control={control}
              defaultValue={null}
              rules={{ required: "Please select a date" }}
              render={({ field: { onChange } }: any) => (
                <DatePicker
                  label="Date-end"
                  onChange={(e) => {
                    const format = e
                      ? dayjs(e as Dayjs).format("YYYY-MM-DD")
                      : "";
                    onChange(format);
                  }}
                  sx={{
                    width: { xs: "100% !important", sm: "auto !important" },
                  }}
                />
              )}
            />
            <ErrorAlert inputName={"date_end"} />
          </Box>
        </LocalizationProvider>
      </SectionForm>
    </>
  );
};
