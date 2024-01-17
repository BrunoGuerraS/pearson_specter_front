"use client";
import DeleteIcon from "@mui/icons-material/Delete";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type customProps = {
  file: File;
};

const CustoImg: React.FC<customProps> = ({ file }) => {
  const [isValidImage, setIsValidImage] = useState<boolean | null>(null);
  const handleLoad = () => {
    setIsValidImage(true);
  };
  const handleError = () => {
    setIsValidImage(false);
  };
  let urlImage = URL.createObjectURL(file);
  const renderContent = () => {
    if (isValidImage) {
      return <Image src={urlImage} width={50} height={50} alt="img" />;
    } else {
      return <FilePresentIcon sx={{ color: "white" }} />;
    }
  };
  return (
    <>
      <Image
        src={urlImage}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: "none" }}
        alt="Preload Image"
        width={50}
        height={50}
      />
      {renderContent()}
    </>
  );
};

export const ListOfFiles = ({ storageFile, setStorageFile }: any) => {
  const handleDelete = (index: number) => {
    const tmp = [...storageFile];
    tmp.splice(index, 1);
    setStorageFile([...tmp]);
  };
  return (
    <List>
      {storageFile &&
        storageFile.map((file: File, index: number) => {
          return (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar>{file && <CustoImg file={file} />}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={file.name} secondary={`${file.size} mb`} />
              <Button onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </Button>
            </ListItem>
          );
        })}
    </List>
  );
};
