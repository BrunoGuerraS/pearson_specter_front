const REGEX =
  /(.jpg|.jpeg|.png|.pdf|.mp3|.ogg|.MOV|.HEIC|.mp4|.wav|.webm|.docx|.xlsx|.pptx|.doc|.xls|.ppt)$/;

const individualValidation = (files: File[], MAXSIZE: number) => {
  for (const file of files) {
    if (file.size > MAXSIZE) {
      console.error("Size not valid");
      return false;
    }
    if (!REGEX.test(file.name)) {
      console.error("Extension not valid");
      return false;
    }
  }
  return true; // All individual validations passed
};

const sizeStorageValidation = (
  fileList: File[],
  incomingFiles: File[],
  MAXSIZE: number
) => {
  const incomingFileSize = incomingFiles.reduce(
    (total: number, file: File) => total + file.size,
    0
  );
  const spaceInUse = fileList.reduce(
    (total: number, file: File) => total + file.size,
    0
  );
  if (incomingFileSize > MAXSIZE) {
    console.error("Total size invalid");
    return false;
  }

  if (spaceInUse + incomingFileSize > MAXSIZE) {
    console.error("Total size invalid");
    return false;
  }

  return true; // Total size validation passed
};

// const storageValidation = (fileList, newFiles);

export const validatorFile = (files: File[], storageFile: File[], MAXSIZE: number) => {
  // d  qebugger;
  if (!individualValidation(files, MAXSIZE)) {
    console.log("Invalid file size or extension");
    return false;
  }

  if (!sizeStorageValidation(storageFile, files, MAXSIZE)) {
    console.log("Total size of new files exceeds the limit");
    return false;
  }

  console.log("all is valid");
  return true;
};
