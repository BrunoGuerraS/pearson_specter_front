import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <Grid
      container
      rowSpacing={2}
      sx={{
        width: "80%",
        margin: "0 auto 50px auto",
        padding: "0 ",
      }}
      maxWidth={800}
    >
      <Grid item xs={12}>
        <Typography
          sx={{
            textAlign: "center",
            width: "100%",
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
              xl: "6rem",
            },
            marginTop: {
              sm: "30px",
            },
          }}
        >
          Pearson Specter
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            typography: { xs: "body2", sm: "body1" },
            margin: {
              xs: "10px 0 30px 0",
              sm: "30px 0",
            },
          }}
        >
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta)
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: { sm: "30px " },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                typography: { xs: "body1", sm: "h6" },
              }}
            >
              Register Report
            </Typography>
            <Typography
              sx={{
                typography: { xs: "body2", sm: "body1" },
                margin: "20px 0",
              }}
            >
              Lorem Ipsum es simpleml año Lorem Ipsum es simplemente el texto de
              reas desde el año 1500, cuando un impresor (N. del T. persona que
              se dedica a la imprenta) desconocido usó una galería de textos y
              los mezcló de 1500{" "}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
              },
            }}
          >
            <Link
              style={{
                listStyle: "none",
                color: "inherit",
                textDecoration: "none",
              }}
              href="/form"
            >
              Register
            </Link>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: { sm: "30px " },
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                typography: { xs: "body1", sm: "h6" },
              }}
            >
              Consult Report
            </Typography>
            <Typography
              sx={{
                typography: { xs: "body2", sm: "body1" },
                margin: "20px 0",
              }}
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
              },
            }}
          >
            <Link
              href={"/consult"}
              style={{
                listStyle: "none",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Consult
            </Link>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
