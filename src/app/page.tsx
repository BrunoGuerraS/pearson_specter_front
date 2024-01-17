import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container
      className="customhegiht"
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 4rem !important",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            width: "100%",
            fontWeight: "bold",
            margin: "2rem 0",
          }}
        >
          Pearson Specter
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "2rem 0",
        }}
      >
        <Typography variant="subtitle1">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos,
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "210px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h4">Register</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href={"/form"}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "0.9rem 1.9rem",
                }}
              >
                Register Form
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h4">Consult</Typography>
            <Typography variant="subtitle1">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href={"/consult"}>
              <Button
                variant="contained"
                sx={{
                  padding: "0.9rem 1.9rem",
                }}
              >
                Consult Report
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
