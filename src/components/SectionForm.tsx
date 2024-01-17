import { Box, Typography } from "@mui/material";

export const SectionForm = ({ children, TitleSection }) => {
  return (
    <Box
      sx={{
        marginLeft: "50px !important",
        marginRight: "50px !important",
        borderRadius: "10px",
        bgcolor: "#DCF2F1",
        padding: "20px"
      }}
    >
      <Typography>{TitleSection}</Typography>
      {children}
    </Box>
  );
};
