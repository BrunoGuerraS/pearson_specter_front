import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface SectionFormProps {
  children: ReactNode;
  titleSection: string;
}

export const SectionForm: FC<SectionFormProps> = ({
  children,
  titleSection,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        bgcolor: "#DCF2F1",
        padding: "30px 30px",
      }}
    >
      <Typography
        sx={{
          margin: "0 0 10px 0",
          fontWeight: "bold",
        }}
      >
        {titleSection}
      </Typography>
      {children}
    </Box>
  );
};
