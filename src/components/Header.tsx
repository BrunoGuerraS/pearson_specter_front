import { Typography } from "@mui/material";
import Link from "next/link";

export const Header = () => {
  return (
    <header style={{
      background: "#0F1035",
      overflow: "hidden",
      height: "52px"
    }}>
      <Link href={"/"}
      style={{
        color: "#DCF2F1",
        textDecoration: "none",
      }}
      >
        <Typography variant="h4" sx={{
          margin: "0.5rem 0",
          marginLeft: "1rem",
        }}>PS</Typography>
      </Link>
    </header>
  );
};
