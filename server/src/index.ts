import express, { Request, Response, NextFunction } from "express";
import router from "./routes/router";

const app = express();
app.use(express.json());
app.disable("x-powered-by");
app.use(router);

const port: number = parseInt(process.env.PORT || "3000", 10);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
