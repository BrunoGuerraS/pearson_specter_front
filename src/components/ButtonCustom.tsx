import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Typography } from "@mui/material";

export const ButtonCustom = ({textButton, addfunction}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        margin: "10px 0",
      }}
    >
      <Button
        onClick={addfunction}
        variant="outlined"
        sx={{
          marginLeft: "10px",
        }}
      >
        <Typography>{textButton}</Typography>
        <AddCircleIcon
          sx={{ marginLeft: "10px" }}
          fontSize="large"
          color="secondary"
        />
      </Button>
    </Box>
  );
};
