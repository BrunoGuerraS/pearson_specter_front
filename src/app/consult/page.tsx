"use client";
import { getReportById } from "@/service/handlerData";
import SearchIcon from "@mui/icons-material/Search";
import {
    Box,
    IconButton,
    InputBase,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useForm } from "react-hook-form";

type dummyData = {
  id_report: string;
  status: string;
  date_to_register: string;
  observations: string;
};
function createData(name: string, detail: string) {
  return { name, detail };
}

const rows = [
  createData("ID Report", "123456789"),
  createData("Staus", "pending"),
  createData("Date Register", "2021-10-10"),
  createData(
    "Observation",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum "
  ),
];

export default function Consult() {
  const [report, setReport] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    try {
      getReportById(data.search).then((res) => {
        setReport(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  };
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          border: "1px solid #ccc",
        }}
      >
        Consult
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          margin: "40px 0",
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
        }}
      >
        <InputBase
          {...register("search")}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Code Report"
          inputProps={{ "aria-label": "place the code report" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
      <TableContainer component={Paper} sx={{ width: "80%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>------</TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
              >
                Detail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center" sx={{ width: "70%" }}>
                  {row.detail}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
