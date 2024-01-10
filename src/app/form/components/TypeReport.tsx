import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const TypeReport = ({
  register,
  typeReport,
  setTypeReport,
  typeRerportList,
}: any) => {
  const handleChange = (event: SelectChangeEvent) => {
    setTypeReport(event.target.value as string);
  };
  return (
    <Select
      {...register("type_report")}
      labelId="select-type"
      id="simple-select"
      value={typeReport}
      label="type"
      onChange={handleChange}
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
  );
};
