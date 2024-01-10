"use client";
import { useEffect, useState } from "react";
import { DragNDropArea } from "./DragNDropArea/DragNDropArea";
import "./EvidenceAria.css";
import { ListOfFiles } from "./ListOfFiles/ListOfFiles";
import { validatorFile } from "./utils/validatorFile";

export const EvidenceAria = ({ register, watch, setValue }: any) => {
  const [fileList, setFileList] = useState([]);
  const [error, setError] = useState("");
  const watcher = watch("evidence");
  const MAXSIZE = 20000000;

  useEffect(() => {
    let tmpFileList: any = [...fileList];
    if (!watcher || watcher.length === 0) return;
    const files = Object.values(watcher).filter((item) => item !== 0);
    if (validatorFile(files, fileList, MAXSIZE)) {
      files.map((file) => tmpFileList.push(file));
      setFileList(tmpFileList);
      console.log(tmpFileList);
    }
  }, [watcher]);

  useEffect(() => {
    function filesAreEqual(file1, file2) {
      return (
        file1.name === file2.name &&
        file1.size === file2.size &&
        file1.type === file2.type &&
        file1.lastModified === file2.lastModified
      );
    }
    const both = function filesArraysAreEqual(array1, array2) {
      if (array1.length !== array2.length) {
        return false;
      }

      for (let i = 0; i < array1.length; i++) {
        if (!filesAreEqual(array1[i], array2[i])) {
          return false;
        }
      }

      return true;
    };

    console.log("fileList", fileList);
    if (!watcher || watcher.length === 0) return;
    const files = Object.values(watcher).filter((item) => item !== 0);
    if (both(watcher, files)) return;

    setValue("evidence", fileList);
  }, [fileList]);

  return (
    <>
      <DragNDropArea setValue={setValue}>
        <input
          {...register("evidence")}
          type="file"
          multiple
          className="drop_area_input form-reportInput"
        />
      </DragNDropArea>
      <ListOfFiles fileList={fileList} />
    </>
  );
};
