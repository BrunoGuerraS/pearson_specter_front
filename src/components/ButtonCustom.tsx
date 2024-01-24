import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Typography } from "@mui/material";

export const ButtonCustom = ({ textButton, addfunction }: any) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button onClick={addfunction} variant="outlined">
        <Typography sx={{ marginRight: "10px"}}>{textButton}</Typography>
        <AddCircleIcon fontSize="large" color="secondary" />
      </Button>
    </Box>
  );
};
