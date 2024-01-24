import { Typography } from "@mui/material";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface ErrorAlert {
  inputName: string;
}

export const ErrorAlert: FC<ErrorAlert> = ({ inputName }) => {
  const {
    formState: { errors },
  } = useFormContext();
  if (!errors || errors[inputName] === undefined) return null;
  console.log("errors => ", errors);
  if (Array.isArray(errors[inputName])) {
    return <Typography sx={{ color: "red" }}>All Field is required</Typography>;
  } else {
    const keyList = Object.keys(errors[inputName]!);
    if (keyList.length > 0) {
      return <Typography sx={{ color: "red" }}> Field is required</Typography>;
    }
  }
};
