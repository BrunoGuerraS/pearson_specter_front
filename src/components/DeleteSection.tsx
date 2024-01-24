import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography } from "@mui/material";

export const DeleteSection = ({ fields, title, index, remove }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{}}>{`${title} ${index + 1}`}</Typography>
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
  );
};
