import prisma from "../utils/prisma";

export default class UserService {
  static async createUser(user) {
    return await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
  }

  static async getUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email: email } });
  }

  static async getUserById(userId) {
    return await prisma.user.findUnique({ where: { userId: userId } });
  }

  static async storeToken(token, email) {
    return await prisma.user.update({
      data: { token: token },
      where: { email: email },
    });
  }

  static async getUserByToken(token) {
    return await prisma.user.findFirst({ where: { token: token } });
  }

  static async deleteToken(userId) {
    return await prisma.user.update({
      data: { token: null },
      where: { userId: userId },
    });
  }
}
