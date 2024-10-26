import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../repositories/taskRepository";
import Task from "../types/task";

export async function getAllTasks() {
  try {
    return await getAll();
  } catch (error: any) {
    return null;
  }
}

export async function getTaskById(id: string) {
  try {
    return getById(id);
  } catch (error: any) {
    return null;
  }
}

export async function createTask(task: Task) {
  try {
    return await create(task);
  } catch (error: any) {
    return null;
  }
}

export async function updateTask(task: Task, id: string) {
  try {
    return await update(task, id);
  } catch (error: any) {
    return null;
  }
}

export async function removeTask(id: string) {
  try {
    return await remove(id);
  } catch (error: any) {
    return null;
  }
}
