// import Container from "@mui/material/Container";
import Wsp from "@/assets/icons/wsp.png";
import Justice from "@/assets/justice2.jpg";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    // <Grid
    //   container
    //   rowSpacing={2}
    //   sx={{
    //     width: "80%",
    //     margin: "0 auto 50px auto",
    //     padding: "0 ",
    //   }}
    //   maxWidth={800}
    // >
    //   <Grid item xs={12}>
    //     <Typography
    //       sx={{
    //         textAlign: "center",
    //         width: "100%",
    //         fontWeight: "bold",
    //         fontSize: {
    //           xs: "2rem",
    //           sm: "3rem",
    //           md: "4rem",
    //           lg: "5rem",
    //           xl: "6rem",
    //         },
    //         marginTop: {
    //           sm: "30px",
    //         },
    //       }}
    //     >
    //       Pearson Specter
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Typography
    //       sx={{
    //         typography: { xs: "body2", sm: "body1" },
    //         margin: {
    //           xs: "10px 0 30px 0",
    //           sm: "30px 0",
    //         },
    //       }}
    //     >
    //       Lorem Ipsum es simplemente el texto de relleno de las imprentas y
    //       archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
    //       las industrias desde el año 1500, cuando un impresor (N. del T.
    //       persona que se dedica a la imprenta)
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12} sm={6}>
    //     <Box
    //       sx={{
    //         height: "100%",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         marginRight: { sm: "30px " },
    //       }}
    //     >
    //       <Box sx={{}}>
    //         <Typography
    //           sx={{
    //             fontWeight: "bold",
    //             textAlign: "center",
    //             typography: { xs: "body1", sm: "h6" },
    //           }}
    //         >
    //           Register Report
    //         </Typography>
    //         <Typography
    //           sx={{
    //             typography: { xs: "body2", sm: "body1" },
    //             margin: "20px 0",
    //           }}
    //         >
    //           Lorem Ipsum es simpleml año Lorem Ipsum es simplemente el texto de
    //           reas desde el año 1500, cuando un impresor (N. del T. persona que
    //           se dedica a la imprenta) desconocido usó una galería de textos y
    //           los mezcló de 1500{" "}
    //         </Typography>
    //       </Box>
    //       <Button
    //         variant="contained"
    //         sx={{
    //           width: {
    //             xs: "100%",
    //             sm: "50%",
    //           },
    //         }}
    //       >
    //         <Link
    //           style={{
    //             listStyle: "none",
    //             color: "inherit",
    //             textDecoration: "none",
    //           }}
    //           href="/form"
    //         >
    //           Register
    //         </Link>
    //       </Button>
    //     </Box>
    //   </Grid>
    //   <Grid item xs={12} sm={6}>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         height: "100%",
    //         flexDirection: "column",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         marginLeft: { sm: "30px " },
    //       }}
    //     >
    //       <Box sx={{}}>
    //         <Typography
    //           sx={{
    //             fontWeight: "bold",
    //             textAlign: "center",
    //             typography: { xs: "body1", sm: "h6" },
    //           }}
    //         >
    //           Consult Report
    //         </Typography>
    //         <Typography
    //           sx={{
    //             typography: { xs: "body2", sm: "body1" },
    //             margin: "20px 0",
    //           }}
    //         >
    //           Lorem Ipsum es simplemente el texto de relleno de las imprentas y
    //           archivos de texto. Lorem Ipsum ha sido el texto de relleno
    //         </Typography>
    //       </Box>
    //       <Button
    //         variant="contained"
    //         sx={{
    //           width: {
    //             xs: "100%",
    //             sm: "50%",
    //           },
    //         }}
    //       >
    //         <Link
    //           href={"/consult"}
    //           style={{
    //             listStyle: "none",
    //             color: "inherit",
    //             textDecoration: "none",
    //           }}
    //         >
    //           Consult
    //         </Link>
    //       </Button>
    //     </Box>
    //   </Grid>
    // </Grid>
    <>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Pearson Specter{" "}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Ethical Legal Area
          </Typography>
        </Box>
        <Box
          position={"relative"}
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            // border: "1px solid red",
          }}
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
        </Box>
      </Container>
      <Box
        height={"300px"}
        sx={{
          background: "#251c1b",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: "40px",
          }}
        >
          Do We need to talk?
        </Typography>
        <Box
          // height={"200px"}
          // width={"60%"}
          display={"flex"}
          alignItems={"start"}
          justifyContent={"space-around"}
          // flexDirection={"column"}
          // border={"1px solid red"}
        >
          <Typography variant="h5" mx={"20px"}>CONTACT US:</Typography>
          {/* <Box mx={"50px"}>
            <Image src={Arrow} alt="contact us" width={100}/>
          </Box> */}
          <Box display={"flex"}>
            <Box mx={"10px"}>
              <Typography>By Whatsapp</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image src={Wsp} alt="whatsapp" width={50} />
                <Typography>+57 300 123 4567</Typography>
              </Box>
            </Box>
            <Box mx={"10px"}>
              <Typography mb={"10px"}>By Email</Typography>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <AlternateEmailOutlinedIcon
                  fontSize="large"
                  sx={{ ml: "5px" }}
                />
                <Typography ml={"10px"}>etical@psfirm.com</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
