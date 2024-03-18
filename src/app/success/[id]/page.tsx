"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import SuccessRegister from "../../../assets/icons/register.png";

export default function SuccessArea() {
  const params = useParams();
  console.log(params);

  return (
    <Box sx={{}}>
      <Paper
        elevation={8}
        sx={{
          margin: "50px auto",
          width: "60%",
          // height: "200px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={SuccessRegister}
          width={120}
          height={120}
          alt="Success Reporter Icon"
        />
        <Box
          sx={{
            margin: "20px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Your report was recorded</Typography>
          <Typography variant="h6">the report code is:</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#365486",
            padding: "15px 28px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            {params.id}
          </Typography>
        </Box>
      </Paper>
      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">
          If you want to know about the status of your report you can click on
          the Consult button or if you need to register for another report click
          on Go Home
        </Typography>
        <Box>
          <Link href={"/"}>
            <Button sx={{
                margin: "20px 50px",
                padding: "13px 50px"
            }} type="button" variant="contained">
              Go Home
            </Button>
          </Link>
          <Link href={"/consult"}>
            <Button sx={{
                margin: "20px 50px",
                padding: "13px 50px"
            }} type="button" variant="contained">
              Consult
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
