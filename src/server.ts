import express from "express";
import cors from "cors";
import userController from "./controllers/userController";
import projectController from "./controllers/projectController";
import taskController from "./controllers/taskController";

const app = express();
app.use(express.json());
app.use(cors());

userController(app);
projectController(app);
taskController(app);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
