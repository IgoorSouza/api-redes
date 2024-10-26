import { Prisma } from "../orm/client";
import User from "../types/user";

const prisma = Prisma.getInstance();

export async function getAll() {
  return await prisma.user.findMany();
}

export async function getById(id: string) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function create(user: User) {
  return await prisma.user.create({
    data: user,
  });
}

export async function update(user: User, id: string) {
  return await prisma.user.update({
    data: user,
    where: {
      id,
    },
  });
}

export async function remove(id: string) {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
}
