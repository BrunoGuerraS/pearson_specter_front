import { ButtonCustom } from "@/components/ButtonCustom";
import { SectionForm } from "@/components/SectionForm";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFieldArray, useFormContext } from "react-hook-form";

const inputPersonStyle = {
  flex: 1,
  margin: "0 10px",
};

export const PersonInvolved = () => {
  const { register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "person_involved",
  });
  const addPerson = () => {
    append({
      name: "",
      last_name: "",
      role: "",
      company: "",
      otros: "",
    });
  };
  return (
    <SectionForm TitleSection={'INFORMACIÓN SOBRE EL REPORTE*'}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {fields.map((item: any, index: any) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "10px",
                // border: "1px solid #000",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // border: "1px solid #000",
                }}
              >
                <Typography sx={{ marginLeft: "10px" }}>
                  Person {index + 1}
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
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <TextField
                  sx={inputPersonStyle}
                  placeholder="name"
                  variant="standard"
                  {...register(`person_involved.${index}.name`)}
                />
                <TextField
                  sx={inputPersonStyle}
                  placeholder="last name"
                  variant="standard"
                  {...register(`person_involved.${index}.last_name`)}
                />
                <TextField
                  sx={inputPersonStyle}
                  placeholder="role"
                  variant="standard"
                  {...register(`person_involved.${index}.role`)}
                />
                <TextField
                  sx={inputPersonStyle}
                  placeholder="company"
                  variant="standard"
                  {...register(`person_involved.${index}.company`)}
                />
              </Box>
            </Box>
          );
        })}
        <ButtonCustom textButton={"Add Person"} addfunction={addPerson}/>
      </Box>
    </SectionForm>
  );
};
