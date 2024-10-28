import { error } from "console";
import http from "http";
import fs from "fs/promises";
import url, { fileURLToPath } from "url";
import path, { dirname } from "path";

//get current path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__filename,__dirname);

const PORT = 5000;
const server = http.createServer(async (req, res) => {
  // res.setHeader('Content-Type','text/html')
  // res.end("<h1>Hello world</h1>");
  // console.log(req.url);
  // console.log(req.method);
  try {
    if (req.method === "GET") {
      let filepath;
      if (req.url === "/") {
        filepath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filepath = path.join(__dirname, "public", "about.html");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(JSON.stringify({ message: "Message Not foung" }));
      }
      const data = await fs.readFile(filepath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method Not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Not Valid Method");
  }
});
server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
