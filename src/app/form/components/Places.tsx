import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, TextField } from "@mui/material";

export const Places = ({ register, filds, remove, append }: any) => {
  return (
    <Box>
      {filds.map((item: any, index: number) => {
        return (
          <Box key={item.id}>
            <TextField
              placeholder="name"
              {...register(`place.${index}.name`)}
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
        onClick={() => {
          append({
            name: "",
          });
        }}
      >
        <AddCircleIcon fontSize="large" color="primary" />
      </Button>
    </Box>
  );
};
