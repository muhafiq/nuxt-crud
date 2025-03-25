import jwt from "jsonwebtoken";

const ACCESS_SECRET_KEY = process.env.ACCESS_SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;

export default class JwtUtils {
  static generateAccessToken(userData) {
    return jwt.sign(userData, ACCESS_SECRET_KEY, {
      expiresIn: "15m",
    });
  }

  static generateRefreshToken(userData) {
    return jwt.sign(userData, REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
  }

  static validateToken(token) {}
}
