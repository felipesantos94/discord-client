const fs = require("node:fs");

const createRandomString = (length: number) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const generateFolder = () => {
  const folderName = "./randomFiles";
  try {
    console.log("Creating folder");
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (err) {
    console.error(err);
  }
};

const generateRandomFile = () => {
  const fileName = createRandomString(7);
  fs.writeFile(`./randomFiles/${fileName}.txt`, "Some content", (err: any) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File created: ${fileName}`);
    }
  });
};

const generateFiles = () => {
  generateFolder();
  for (let i = 0; i < 10; i++) {
    generateRandomFile();
  }
};

generateFiles();
