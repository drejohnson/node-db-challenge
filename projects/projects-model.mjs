import db from "../data/db-config.js";

function findProjects() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id });
}

function add(project) {
  return db("projects").insert(project);
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}

export default { findProjects, findById, add, remove };
