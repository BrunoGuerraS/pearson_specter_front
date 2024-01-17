import { SectionForm } from "@/components/SectionForm";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

export const ContactOptions = () => {
  const { register } = useFormContext();
  return (
    <SectionForm TitleSection={"OPCIONES DE CONTACTO"}>
      <Box>
        <Typography variant="body1">
          ¿Cuál es su relación con la empresa?
        </Typography>
        <TextField {...register("companyRelationship")} />
        <Typography variant="body1">¿Desea mantener su anonimato?</Typography>
        <FormControlLabel
          required
          control={<Checkbox />}
          label="Sí, deseo mantener mi anonimato"
        />
      </Box>
    </SectionForm>
  );
};
