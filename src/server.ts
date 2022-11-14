import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

import { routes } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT;

const jsonOptions = { limit: "10mb", extended: true };
const urlencodedOptions = {
  limit: "10mb",
  extended: true,
};

app.use(bodyParser.json(jsonOptions));
app.use(bodyParser.urlencoded(urlencodedOptions));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
