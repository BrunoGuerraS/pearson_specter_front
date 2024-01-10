"use client";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

export const DateEvent = ({ ControlComponent: Controller, control }: any) => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name="date_start"
          control={control}
          defaultValue={null}
          render={({ field: { onChange } }: any) => (
            <DatePicker
              label="date-star"
              onChange={(e) => {
                const format = e ? dayjs(e as Dayjs).format("YYYY-MM-DD") : "";
                onChange(format);
              }}
            />
          )}
        />
        <Controller
          name="date_end"
          control={control}
          defaultValue={null}
          render={({ field: { onChange } }: any) => (
            <DatePicker
              label="date-end"
              onChange={(e) => {
                const format = e ? dayjs(e as Dayjs).format("YYYY-MM-DD") : "";
                onChange(format);
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
};
