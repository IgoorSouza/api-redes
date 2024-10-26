import { Application } from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  removeProject,
  updateProject,
} from "../services/projectService";

const projectController = (app: Application) => {
  app.get("/projects", async (request, response) => {
    const projects = await getAllProjects();
    response
      .status(projects ? 200 : 500)
      .send(projects ?? "Error while getting Projects.");
  });

  app.get("/projects/:id", async (request, response) => {
    const id = request.params.id;
    const project = await getProjectById(id);
    response.status(project ? 200 : 404).send(project ?? "Project not found.");
  });

  app.post("/projects", async (request, response) => {
    const project = await createProject(request.body);
    response
      .status(project ? 201 : 400)
      .send(project ?? "Invalid project data.");
  });

  app.put("/projects/:id", async (request, response) => {
    const id = request.params.id;
    const project = await updateProject(request.body, id);
    response.status(project ? 200 : 404).send(project ?? "Project not found.");
  });

  app.delete("/projects/:id", async (request, response) => {
    const id = request.params.id;
    const project = await removeProject(id);
    response
      .status(project ? 200 : 404)
      .send(
        project
          ? `Successfully deleted project with id ${id}`
          : "Project not found."
      );
  });
};

export default projectController;
