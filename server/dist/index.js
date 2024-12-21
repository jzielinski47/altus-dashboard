"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./routes/router"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const mongoose_1 = __importDefault(require("mongoose"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
require("./strategies/local-strategy");
const app = (0, express_1.default)();
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
mongoose_1.default
    .connect("mongodb://localhost:27017/avantgarde_project")
    .then(() => console.log("Connected to MongoDb Database"))
    .catch((err) => console.log(err));
app.use(express_1.default.json());
app.disable("x-powered-by");
app.use((0, express_session_1.default)({
    secret: "secret_cypher_key",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 4, // 4 hours
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    },
    store: connect_mongo_1.default.create({ client: mongoose_1.default.connection.getClient() }),
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(router_1.default);
app.get("/", (req, res) => {
    //@ts-ignore
    req.session.visited = true;
    res.send({ msg: "welcome to /" });
});
const port = parseInt(process.env.PORT || "4000", 10);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
