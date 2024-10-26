import { Prisma } from "../orm/client";
import Project from "../types/project";

const prisma = Prisma.getInstance();

export async function getAll() {
  return await prisma.project.findMany();
}

export async function getById(id: string) {
  return await prisma.project.findUnique({
    where: {
      id,
    },
  });
}

export async function create(project: Project) {
  return await prisma.project.create({
    data: project,
  });
}

export async function update(project: Project, id: string) {
  return await prisma.project.update({
    data: project,
    where: {
      id,
    },
  });
}

export async function remove(id: string) {
  return await prisma.project.delete({
    where: {
      id,
    },
  });
}
