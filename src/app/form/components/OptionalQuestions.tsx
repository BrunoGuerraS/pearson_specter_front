import { SectionForm } from "@/components/SectionForm";
import { Box, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { questions } from "../config/optionalQuestionConfig";

export const OptionalQuestions = () => {
  const { register } = useFormContext();
  return (
    <SectionForm titleSection={"INFORMACIÓN ADICIONAL DEL REPORTE (OPCIONAL)"}>
      <Box>
        {questions.map((question, index) => {
          return (
            <Box key={index} sx={{marginBottom: "30px"}}>
              <Typography variant="body1">{question}</Typography>
              <TextField
                {...register(`answer${index + 1}`)}
                multiline
                rows={3}
                sx={{ width: "100%" }}
              />
            </Box>
          );
        })}
      </Box>
    </SectionForm>
  );
};
