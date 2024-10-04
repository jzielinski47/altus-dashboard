import express from "express";

const app = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

const usersData = [
  { id: 0, username: "admin", token: "0" },
  { id: 1, username: "user", token: "1" },
];

/*
  My first step is to make a simple log-in/register system working on GET/POST requests only with no web-sockets invloved.
*/

/*
200 OK
201 Created
202 Accepted
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
*/

app.get("/api/users", (req, res) => {
  res.send(usersData);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
  const requestedId = parseInt(req.params.id);
  isNaN(requestedId) ? res.status(400).send({ msg: "Invalid id." }) : null;
  const filteredUser = usersData.find((user) => user.id === requestedId);
  !filteredUser ? res.status(404).send({ msg: "No such user." }) : null;
  res.status(200).send(filteredUser);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
