import express from "express";
import projectRouter from "../projects/project-router.mjs";

const server = express();

server.use(express.json());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send("<h1>Node DB Sprint</h1>");
});

export default server;
