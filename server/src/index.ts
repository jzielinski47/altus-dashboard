import express from "express";

const app = express();
const port: number = parseInt(process.env.PORT || "8000", 10);

app.get("/api/users", (req, res) => {
  res.send([
    { id: 0, username: "admin", password: "admin" },
    { id: 1, username: "user", password: "user" },
    { id: 2, username: "guest", password: "guest" },
  ]);
  console.log(req.query);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
