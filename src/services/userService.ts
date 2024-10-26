import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../repositories/userRepository";
import User from "../types/user";

export async function getAllUsers() {
  try {
    return await getAll();
  } catch (error: any) {
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    return getById(id);
  } catch (error: any) {
    return null;
  }
}

export async function createUser(user: User) {
  try {
    return await create(user);
  } catch (error: any) {
    return null;
  }
}

export async function updateUser(user: User, id: string) {
  try {
    return await update(user, id);
  } catch (error: any) {
    return null;
  }
}

export async function removeUser(id: string) {
  try {
    return await remove(id);
  } catch (error: any) {
    return null;
  }
}
