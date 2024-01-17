import { SectionForm } from "@/components/SectionForm";
import { Box, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { questions } from "../config/optionalQuestionConfig";

export const OptionalQuestions = () => {
  const { register } = useFormContext();
  return (
    <SectionForm TitleSection={"INFORMACIÓN ADICIONAL DEL REPORTE (OPCIONAL)"}>
      <Box>
        {questions.map((question, index) => {
          return (
            <Box key={index}>
              <Typography variant="body1">{question}</Typography>
              <TextField
                {...register(`answer${index + 1}`)}
                sx={{ width: "100%" }}
              />
            </Box>
          );
        })}
      </Box>
    </SectionForm>
  );
};
