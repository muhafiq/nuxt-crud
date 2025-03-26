import jwt from "jsonwebtoken";

const config = useRuntimeConfig();

export default class JwtUtils {
  static generateAccessToken(userData) {
    return jwt.sign(userData, config.JWT_ACCCESS_SECRET_KEY, {
      expiresIn: "15m",
    });
  }

  static generateRefreshToken(userData) {
    return jwt.sign(userData, config.JWT_REFRESH_SECRET_KEY, {
      expiresIn: "30d",
    });
  }
  static validateAccessToken(token) {
    return new Promise((resolve, reject) => {
      if (!token) return reject(new Error("Token is required"));
      jwt.verify(token, config.JWT_ACCCESS_SECRET_KEY, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });
  }

  static validateRefreshToken(token) {
    if (!token) return reject(new Error("Token is required"));
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.JWT_REFRESH_SECRET_KEY, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });
  }
}
