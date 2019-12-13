import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Node DB Sprint</h1>");
});

export default server;
