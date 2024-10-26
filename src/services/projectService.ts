import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../repositories/projectRepository";
import Project from "../types/project";

export async function getAllProjects() {
  try {
    return await getAll();
  } catch (error: any) {
    return null;
  }
}

export async function getProjectById(id: string) {
  try {
    return getById(id);
  } catch (error: any) {
    return null;
  }
}

export async function createProject(project: Project) {
  try {
    return await create(project);
  } catch (error: any) {
    return null;
  }
}

export async function updateProject(project: Project, id: string) {
  try {
    return await update(project, id);
  } catch (error: any) {
    return null;
  }
}

export async function removeProject(id: string) {
  try {
    return await remove(id);
  } catch (error: any) {
    return null;
  }
}
