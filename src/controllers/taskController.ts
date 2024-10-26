import { Application } from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  removeTask,
  updateTask,
} from "../services/taskService";

const taskController = (app: Application) => {
  app.get("/tasks", async (request, response) => {
    const tasks = await getAllTasks();
    response
      .status(tasks ? 200 : 500)
      .send(tasks ?? "Error while getting tasks.");
  });

  app.get("/tasks/:id", async (request, response) => {
    const id = request.params.id;
    const task = await getTaskById(id);
    response.status(task ? 200 : 404).send(task ?? "Task not found.");
  });

  app.post("/tasks", async (request, response) => {
    const task = await createTask(request.body);
    response.status(task ? 201 : 400).send(task ?? "Invalid Task data.");
  });

  app.put("/tasks/:id", async (request, response) => {
    const id = request.params.id;
    const task = await updateTask(request.body, id);
    response.status(task ? 200 : 404).send(task ?? "Task not found.");
  });

  app.delete("/tasks/:id", async (request, response) => {
    const id = request.params.id;
    const task = await removeTask(id);
    response
      .status(task ? 200 : 404)
      .send(
        task ? `Successfully deleted task with id ${id}` : "Task not found."
      );
  });
};

export default taskController;
