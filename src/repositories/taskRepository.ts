import { Prisma } from "../orm/client";
import Task from "../types/task";

const prisma = Prisma.getInstance();

export async function getAll() {
  return await prisma.task.findMany();
}

export async function getById(id: string) {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
}

export async function create(task: Task) {
  return await prisma.task.create({
    data: task,
  });
}

export async function update(task: Task, id: string) {
  return await prisma.task.update({
    data: task,
    where: {
      id,
    },
  });
}

export async function remove(id: string) {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
}
