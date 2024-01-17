"use client";
import { Box, Button } from "@mui/material";
import React, { ReactNode, useEffect, useRef } from "react";
import { UseFormSetValue } from "react-hook-form";
import "./DragNDropArea.css";

type IDragNDropArea = {
  children: ReactNode;
  setValue: UseFormSetValue<any>;
  setStorageFile: React.Dispatch<React.SetStateAction<File[]>>;
  storageFile?: File[];
};


export const DragNDropArea: React.FC<IDragNDropArea> = ({
  children,
  setStorageFile,
}) => {
  const ref = useRef<HTMLDivElement | null>();
  useEffect(() => {
    const dropArea = ref.current;

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      console.log("drop in process");
      dropArea?.classList.remove("active");
      if (!e.dataTransfer?.files) return;

      const newFiles = Object.values(e.dataTransfer.files || []).filter(
        (item) => item instanceof File
      );
      console.log("newFiles", newFiles);

      setStorageFile((prevFiles: File[] | undefined) => {
        if (!prevFiles) return [...newFiles];
        const uniqueFiles = newFiles.filter((newFile) => {
          return !prevFiles.some((prevFile) => prevFile.name === newFile.name);
        });
        return [...prevFiles, ...uniqueFiles];
      });
    };

    if (dropArea) {
      dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        console.log("dragover in process");
        dropArea.classList.add("active");
      });

      dropArea.addEventListener("dragleave", (e) => {
        e.preventDefault();
        console.log("dragleave in process");
        dropArea.classList.remove("active");
      });

      dropArea.addEventListener("drop", handleDrop as any);
    }

    return () => {
      if (dropArea) {
        dropArea.removeEventListener("dragover", () => {});
        dropArea.removeEventListener("dragleave", () => {});
        dropArea.removeEventListener("drop", handleDrop as any);
      }
    };
  }, [setStorageFile]);

  const handlerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const dropArea = ref.current;
    const input: HTMLInputElement | null =
      dropArea?.querySelector(".drop_area_input") || null;
    input?.click();
    console.log("click");
  };

  return (
    <Box
      sx={{
        width: "100%",
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
        onClick={handlerClick}
      >
        Selecionar Archivos
      </Button>
      {children}
      <label className="drop_area_label"></label>
    </Box>
  );
};
