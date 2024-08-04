import express from "express";
import dotenv from "dotenv";
import Connection from "./config/database.js";
import router from "./route/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 1000;
const __dirname = path.resolve();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

server.listen(PORT, () => {
    Connection();
    console.log(`Server running successfully on port ${PORT}`);
});
