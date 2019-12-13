import db from "../data/db-config.js";

function findResources() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id });
}

function add(resource) {
  return db("resources").insert(resource);
}

function remove(id) {
  return db("resources")
    .where({ id })
    .del();
}

export default { findResources, findById, add, remove };
