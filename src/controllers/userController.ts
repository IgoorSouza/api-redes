import { Application } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  removeUser,
  updateUser,
} from "../services/userService";

const userController = (app: Application) => {
  app.get("/users", async (request, response) => {
    const users = await getAllUsers();
    response
      .status(users ? 200 : 500)
      .send(users ?? "Error while getting users.");
  });

  app.get("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = await getUserById(id);
    response.status(user ? 200 : 404).send(user ?? "User not found.");
  });

  app.post("/users", async (request, response) => {
    const user = await createUser(request.body);
    response.status(user ? 201 : 400).send(user ?? "Invalid user data.");
  });

  app.put("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = await updateUser(request.body, id);
    response.status(user ? 200 : 404).send(user ?? "User not found.");
  });

  app.delete("/users/:id", async (request, response) => {
    const id = request.params.id;
    const user = await removeUser(id);
    response
      .status(user ? 200 : 404)
      .send(
        user ? `Successfully deleted user with id ${id}` : "User not found."
      );
  });
};

export default userController;
