import ImageIcon from "@mui/icons-material/Image";
import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import React from "react";

const dataDummy = [
  {
    img: "rulsklkjaafds",
    name: "file1",
    size: 2314,
  },
  {
    img: "rulsklkjaafds",
    name: "file1",
    size: 2314,
  },
  {
    img: "rulsklkjaafds",
    name: "file1",
    size: 2314,
  },
];

type IListOfFiles = {
    fileList?: Blob[]
}

export const ListOfFiles: React.FC<IListOfFiles> = ({fileList}) => {
  return (
    <List>
      {fileList && fileList.map((file, index) => {
        return (
          <ListItem key={index} sx={{}}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={file.name} secondary={`${file.size} mb`} />
          </ListItem>
        );
      })}
    </List>
  );
};
