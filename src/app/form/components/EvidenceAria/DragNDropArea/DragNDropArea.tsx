import { Box, Button } from "@mui/material";
import React, { ReactNode, useEffect, useRef } from "react";
import "./DragNDropArea.css";

type IDragNDropArea = {
  children: ReactNode;
  setValue: any;
};

export const DragNDropArea: React.FC<IDragNDropArea> = ({
  children,
  setValue,
}) => {
  const ref = useRef<HTMLDivElement | null>();
  useEffect(() => {
    const dropArea = ref.current;
    if (!dropArea) return;
    const button = dropArea.querySelector(
      ".drop_area_button"
    ) as HTMLButtonElement | null;
    const label = dropArea.querySelector(
      ".drop_area_label"
    ) as HTMLButtonElement | null;
    const input = dropArea.querySelector(
      ".drop_area_input"
    ) as HTMLButtonElement | null;

    button?.addEventListener("click", () => {
      input?.click();
    });
    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.classList.add("active");
      label!.textContent = "Suelta para subir tus archivos";
    });
    dropArea.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dropArea.classList.remove("active");
    });
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropArea.classList.remove("active");
      label!.textContent = "";
      const newFiles = e.dataTransfer?.files;
      console.log("hey news", newFiles);
      setValue("evidence", newFiles);
    });

    return () => {
      dropArea.removeEventListener("dragover", () => {});
      dropArea.removeEventListener("dragleave", () => {});
      dropArea.removeEventListener("drop", () => {});
    };
  }, [setValue]);
  return (
    <Box
      sx={{
        width: "500px",
        height: "100px",
        border: "dashed 1px purple",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      ref={ref}
    >
      <Button
        variant="contained"
        type="button"
        className="drop_area_button"
        sx={{
          cursor: "pointer",
        }}
      >
        Selecionar Archivos
      </Button>
      {children}
      <label className="drop_area_label"></label>
    </Box>
  );
};
