import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, TextField } from "@mui/material";

export const PersonInvolved = ({ register, filds, remove, append }: any) => {
  return (
    <Box>
      {filds.map((item: any, index: any) => {
        return (
          <Box key={item.id}>
            <TextField
              placeholder="name"
              {...register(`person_involved.${index}.name`)}
            />
            <TextField
              placeholder="last name"
              {...register(`person_involved.${index}.last_name`)}
            />
            <TextField
              placeholder="role"
              {...register(`person_involved.${index}.role`)}
            />
            <TextField
              placeholder="company"
              {...register(`person_involved.${index}.company`)}
            />
            <TextField
              placeholder="otros"
              {...register(`person_involved.${index}.otros`)}
            />
            <Button
              onClick={() => {
                if (filds.length > 1) {
                  remove(index);
                }
              }}
            >
              <DeleteIcon fontSize="large" color="error" />
            </Button>
          </Box>
        );
      })}

      <Button
        onClick={() =>
          append({
            name: "",
            last_name: "",
            role: "",
            company: "",
            otros: "",
          })
        }
      >
        <AddCircleIcon fontSize="large" color="primary" />
      </Button>
    </Box>
  );
};
