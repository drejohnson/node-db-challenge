import express from "express";
import ProjectRouter from "../projects/project-router.mjs";
import ResourceRouter from "../resources/resource-router.mjs";

const server = express();

server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);

server.get("/", (req, res) => {
  res.send("<h1>Node DB Sprint</h1>");
});

export default server;
