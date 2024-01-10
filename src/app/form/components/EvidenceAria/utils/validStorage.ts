interface IvalidStorage{
    (fileList: any, MAXSIZE: number, error?: any): void
}

export const validStorage: IvalidStorage = (fileList, MAXSIZE, error) => {
    const countZise = fileList.reduce((total: number, file: any) => total + file.size, 0)
    console.log(countZise)
}