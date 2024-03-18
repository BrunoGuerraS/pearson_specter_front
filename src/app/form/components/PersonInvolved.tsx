import { ButtonCustom } from "@/components/ButtonCustom";
import { DeleteSection } from "@/components/DeleteSection";
import { ErrorAlert } from "@/components/ErrorAlert";
import { SectionForm } from "@/components/SectionForm";
import { PersonInvolvedSchema } from "@/schema/personInvolved.schema";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FC, useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

const inputPersonStyle = {
  margin: "20px 0",
  width: "100%",
};

export const PersonInvolved: FC = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "person_involved",
  });
  console.log("PersonInvolvedSchema", PersonInvolvedSchema);
  useEffect(() => {
    console.log("fields", fields);
  }, [fields]);
  const addPerson = () => {
    append(PersonInvolvedSchema);
  };
  return (
    <SectionForm titleSection={"INFORMACIÓN SOBRE EL REPORTE*"}>
      <Box>
        {fields.map((item: any, index: any) => {
          return (
            <Box key={item.id}>
              <DeleteSection
                fields={fields}
                title={"Person"}
                index={index}
                remove={remove}
              />
              <Grid container spacing={2}>
                {
                PersonInvolvedSchema &&
                Object.keys(PersonInvolvedSchema).map((key) => {
                  console.log("key", key);
                  return (
                    <Grid key={key} xs={12} sm={3}>
                      <TextField
                        {...register(`person_involved.${index}.${key}`, {
                          required: true,
                        })}
                        sx={inputPersonStyle}
                        label={key}
                        variant="standard"
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <ErrorAlert inputName={"person_involved"} />
            </Box>
          );
        })}
        <ButtonCustom textButton={"Add Person"} addfunction={addPerson} />
      </Box>
    </SectionForm>
  );
};
