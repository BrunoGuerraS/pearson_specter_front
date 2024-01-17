import { ButtonCustom } from "@/components/ButtonCustom";
import { SectionForm } from "@/components/SectionForm";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

export const Places = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "place",
  });
  const addPlace = () => {
    append({
      name: "",
    });
  };
  return (
    <SectionForm TitleSection={"IDENTIFICACIÓN DEL LUGAR DEL SUCESO*"}>
      <Box>
        {fields.map((item: any, index: number) => {
          return (
            <Box key={item.id} sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // border: "1px solid #000",
                }}
              >
                <Typography sx={{ marginLeft: "10px" }}>
                  Place {index + 1}
                </Typography>
                <Button
                  onClick={() => {
                    if (fields.length > 1) {
                      remove(index);
                    }
                  }}
                >
                  <DeleteIcon fontSize="large" color="error" />
                </Button>
              </Box>
              <TextField
                placeholder="name"
                {...register(`place.${index}.name`)}
              />
             
            </Box>
          );
        })}
        <ButtonCustom textButton={"Add place"} addfunction={addPlace} />
      </Box>
    </SectionForm>
  );
};
