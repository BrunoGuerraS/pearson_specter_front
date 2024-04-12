// import Container from "@mui/material/Container";
// import Justice from "@/assets/justice2.jpg";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          // minWidth: "320px",
          px: { xs: "0", sm: "10px" },
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            border: "1px solid red",
          }}
        >
          <Typography
            sx={{
              typography: { xs: "h4", sm: "h3", md: "h2" },
              fontFamily: "Rosarivo !important",
            }}
          >
            Pearson Specter
          </Typography>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            sx={{
              typography: { xs: "h4", sm: "h3", md: "h2" },
              fontFamily: "Rosarivo !important",
            }}
          >
            Ethical Legal Area
          </Typography>
        </Box>
        {/* <Box
          position={"relative"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box position={"absolute"} width={"150px"} left={"90px"} top={"50%"}>
            <CheckCircleOutlineIcon fontSize="large" />
            <Typography>
              Specialized analysts <br /> will follow up on your report
            </Typography>
          </Box>
          <Box>
            <Image
              src={Justice}
              alt="Justice"
              width={600}
              style={
                {
                  // border: "1px solid green",
                }
              }
            />
          </Box>
          <Box position={"absolute"} width={"180px"} right={"70px"} top={"30%"}>
            <GppGoodOutlinedIcon fontSize="large" />
            <Typography>
              Our duty is to maintain order and ensure that appropriate
              sanctions are applied to any violation of our firm&apos;s ethical
              code.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" mb={{ xs: "20px", sm: "20px" }}>
            Manage your report here
          </Typography>
          <Typography
            mb={{ xs: "20px", sm: "40px" }}
            sx={{
              maxWidth: "450px",
            }}
          >
            If you have been a victim of any case against the ethical
            regulations or have witnessed any act that goes against them, you
            can generate a report here
          </Typography>
        </Box>
        <Box
          height={"250px"}
          my={"50px"}
          sx={{
            display: "flex",
          }}
        >
          <Box
            height={"100%"}
            p={2}
            width={"50%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Register New Report</Typography>
            <Typography
              variant="body2"
              height={"100px"}
              width={"70%"}
              my={"20px"}
            >
              The information submitted in the following form will be received
              by an Ethics Committee, which comprises specialized members
              ensuring the confidentiality of the whistleblowers
            </Typography>
            <Button
              variant="contained"
              sx={{
                p: "20px 30px",
                borderRadius: "30px",
                background: "#452b01",
                color: "white",
              }}
            >
              Register Report
            </Button>
          </Box>
          <Box
            height={"100%"}
            p={2}
            width={"50%"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Consult Report</Typography>
            <Typography
              height={"100px"}
              variant="body2"
              width={"70%"}
              my={"20px"}
            >
              Check the status of the report submitted. You only need to enter
              the generated code.
            </Typography>
            <Button
              variant="contained"
              sx={{
                p: "20px 30px",
                borderRadius: "30px",
                background: "#452b01",
                color: "white",
              }}
            >
              Consult
            </Button>
          </Box>
        </Box> */}
      </Container>
      {/* <Box
        height={"300px"}
        sx={{
          background: "#251c1b",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" fontWeight={"bold"}>
          Do We need to talk?
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-around"}
          ml={"40px"}
        >
          <Typography variant="h5" mb={"20px"}>
            CONTACT US:
          </Typography>

          <Box display={"flex"} flexDirection={"column"} ml={"20px"}>
            <Box>
              <Typography>By Whatsapp</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={Wsp}
                  alt="whatsapp"
                  width={50}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <Typography>+57 300 123 4567</Typography>
              </Box>
            </Box>
            <Box>
              <Typography mb={"10px"}>By Email</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <AlternateEmailOutlinedIcon
                  fontSize="large"
                  sx={{ ml: "10px" }}
                />
                <Typography ml={"10px"}>etical@psfirm.com</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}
