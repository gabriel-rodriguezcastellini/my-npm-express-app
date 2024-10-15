import express, { urlencoded, static as serveStatic } from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(urlencoded({ extended: true }));
app.use(serveStatic("public"));

import indexRoute from "./routes/index.js";
import usersRoute from "./routes/users.js";

app.use("/", indexRoute);
app.use("/users", usersRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
