import express from "express";
import Projects from "./projects-model.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.findProjects();
    const transformedProject = projects.map(project => {
      return {
        ...project,
        completed: project.completed === 0 ? false : true
      };
    });
    res.status(200).json(transformedProject);
  } catch (error) {
    res.status(500).json({ error: "Projects could not be retrieved." });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findById(id);
    if (!project)
      return res
        .status(404)
        .json(`project with id of ${id} could not be found`);
    res
      .status(200)
      .json({ ...project, completed: project.completed === 0 ? false : true });
  } catch (error) {
    res.status(500).json({ error: "Project could not be retrieved." });
  }
});

router.post("/", async (req, res) => {
  const projectData = req.body;

  if (!req.body)
    return res.status(400).json({
      errorMessage: "Please provide required info."
    });
  try {
    const project = await Projects.add(projectData);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new project" });
  }
});

export default router;
