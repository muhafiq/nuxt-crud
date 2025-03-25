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
}
