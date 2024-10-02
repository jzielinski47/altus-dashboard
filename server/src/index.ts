import express from "express";

const app = express();
const port: number = parseInt(process.env.PORT || "8000", 10);

app.get("/api/users", (req, res) => {
  res.send([
    { id: 0, username: "admin", password: "admin" },
    { id: 1, username: "user", password: "user" },
    { id: 2, username: "guest", password: "guest" },
  ]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
