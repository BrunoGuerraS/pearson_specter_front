import { Box, TextField } from "@mui/material";

export const Description = ({ register }: any) => {
  return (
    <Box>
      <TextField
        {...register("description")}
        label="Description"
        placeholder="description"
        multiline
      />
    </Box>
  );
};
