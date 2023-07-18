import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import chokidar from "chokidar";

const docsFolder = "./docs";
const appDocsFolder = "./src/app/docs";

const copyFile = (source: string, destination: string) => {
  const file = readFileSync(source, "utf-8");
  writeFileSync(destination, file);

  console.log(`Copied ${source} to ${destination}`);
};

const copyFolder = (source: string, destination: string) => {
  const files = readdirSync(source);
  files.forEach((file) => {
    const sourcePath = `${source}/${file}`;
    const stat = lstatSync(sourcePath);
    if (stat.isDirectory()) {
      const destinationPath = `${destination}/${file}`;
      copyFolder(sourcePath, destinationPath);
    } else if (stat.isFile()) {
      // If it's index.mdx, go back one folder and rename it to page.mdx
      if (file === "index.mdx") {
        const destinationPath = `${destination}/page.mdx`;
        createFolder(`${destination}`);
        copyFile(sourcePath, destinationPath);
        return;
      } else {
        const fileWithoutExtension = file.replace(".mdx", "");
        createFolder(`${destination}/${fileWithoutExtension}`);
        const destinationPath = `${destination}/${fileWithoutExtension}/page.mdx`;
        copyFile(sourcePath, destinationPath);
      }
    } else {
      console.log(`Unknown file type: ${sourcePath}`);
    }
  });
};

const createFolder = (folder: string) => {
  console.log(`Creating folder ${folder}`);
  const exist = existsSync(folder);
  if (!exist) {
    mkdirSync(folder, { recursive: true });
  }
};

const clearFolder = (folder: string) => {
  console.log(`Clearing folder ${folder}`);
  const exist = existsSync(folder);
  if (exist) {
    // Delete folders inside
    const files = readdirSync(folder);
    files.forEach((file) => {
      const sourcePath = `${folder}/${file}`;
      const stat = lstatSync(sourcePath);
      if (stat.isDirectory()) {
        console.log(`Deleting folder ${sourcePath}`);
        rmSync(sourcePath, { recursive: true, force: true });
      }
      if (stat.isFile()) {
        // Only page.tsx files
        if (file === "page.tsx") {
          rmSync(sourcePath, { recursive: true, force: true });
        }
      }
    });
  }
};

const main = () => {
  console.clear();
  console.log("[1] - Clearing app docs folder");
  clearFolder(appDocsFolder);
  console.log("[2] - Creating app docs folder");
  createFolder(appDocsFolder);
  console.log("[3] - Copying docs folder to app docs folder");
  copyFolder(docsFolder, appDocsFolder);
};

const watcher = chokidar.watch(docsFolder);

watcher.on("all", main);
