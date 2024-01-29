import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const message = "I am fresh and young";
const file_name = "fresh.txt";
const dir = "files";

const create = async () => {
  const filePath = path.join(__dirname, dir, file_name);

  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }

  fs.writeFileSync(filePath, message);
};

await create();
