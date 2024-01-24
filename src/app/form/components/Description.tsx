import { SectionForm } from "@/components/SectionForm";
import { Box, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const Description = () => {
  const { register } = useFormContext();

  return (
    <SectionForm titleSection={"DESCRIPCIÓN DEL SUCESO*"}>
      <Box>
        <TextField
          {...register("description")}
          multiline
          rows={4}
          defaultValue="Default Value"
   
          sx={{ width: "100%", }}
        />
      </Box>
    </SectionForm>
  );
};
