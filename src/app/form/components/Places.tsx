import { ButtonCustom } from "@/components/ButtonCustom";
import { DeleteSection } from "@/components/DeleteSection";
import { ErrorAlert } from "@/components/ErrorAlert";
import { SectionForm } from "@/components/SectionForm";
import { placeSchema } from "@/schema/place.schema";
import { Box, Grid, TextField } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

const styleBox = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};

export const Places = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "place",
  });
  const addPlace = () => {
    append(placeSchema);
  };
  return (
    <SectionForm titleSection={"IDENTIFICACIÓN DEL LUGAR DEL SUCESO*"}>
      <Box>
        {fields.map((item: any, index: number) => {
          return (
            <Box key={item.id}>
              <DeleteSection
                fields={fields}
                title={"Place"}
                index={index}
                remove={remove}
              />
              {Object.keys(placeSchema).map((key) => {
                return (
                  <Grid key={key}>
                    <TextField
                      {...register(`place.${index}.${key}`, {
                        required: true,
                      })}
                      label={key}
                      variant="standard"
                    />
                  </Grid>
                );
              })}
            </Box>
          );
        })}
        <ButtonCustom textButton={"Add place"} addfunction={addPlace} />
        <ErrorAlert inputName={"place"} />
      </Box>
    </SectionForm>
  );
};
