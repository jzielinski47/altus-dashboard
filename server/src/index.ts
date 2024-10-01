import express from "express";

const app = express();
const port: number = parseInt(process.env.PORT || "8000", 10);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
