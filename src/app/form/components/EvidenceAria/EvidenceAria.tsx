"use client";
import { SectionForm } from "@/components/SectionForm";
import { FC, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { DragNDropArea } from "./DragNDropArea/DragNDropArea";
import "./EvidenceAria.css";
import { ListOfFiles } from "./ListOfFiles/ListOfFiles";
import { validatorFile } from "./utils/validatorFile";

export const EvidenceAria: FC = () => {
  const [storageFile, setStorageFile] = useState<File[]>([]);
  const { register, setValue } = useFormContext();
  const MAXSIZE = 20000000;

  useEffect(() => {
    if (!storageFile || storageFile.length === 0) return;
    setValue("evidence", storageFile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageFile]);

  const handlerFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Object.values(e.target.files || []).filter(
      (item) => item instanceof File
    );
    if (validatorFile(files, storageFile, MAXSIZE)) {
      setStorageFile((cv) => [...cv, ...files]);
    }
  };

  return (
    <SectionForm titleSection={"EVIDENCIAS"}>
      <DragNDropArea
        setStorageFile={setStorageFile}
        setValue={setValue}
        storageFile={storageFile}
      >
        <input
          // {...register("pointerToInputFlie")}
          type="file"
          multiple
          className="drop_area_input form-reportInput"
          onChange={handlerFiles}
        />
      </DragNDropArea>
      <ListOfFiles storageFile={storageFile} setStorageFile={setStorageFile} />
    </SectionForm>
  );
};
