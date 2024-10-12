"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.disable("x-powered-by");
app.use(
  (0, express_session_1.default)({
    secret: "test_key",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
  })
);
app.use(router_1.default);
app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);

  req.session.visited = true;
  res.send({ msg: "welcome to /" });
});
const port = parseInt(process.env.PORT || "3000", 10);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
