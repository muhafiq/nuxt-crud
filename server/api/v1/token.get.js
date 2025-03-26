import JwtUtils from "~/server/utils/jwt";
import UserService from "~/server/services/user.service";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, "refreshToken");

  if (!refreshToken) {
    console.log(refreshToken);
    setResponseStatus(event, 401);
    return {
      success: false,
      message: "Unauthorized, missing token.",
    };
  }

  const isTokenValid = await UserService.getUserByToken(refreshToken);
  if (!isTokenValid) {
    setResponseStatus(event, 401);
    return {
      success: false,
      message: "Invalid Token, not related to any user.",
    };
  }

  try {
    const decoded = await JwtUtils.validateRefreshToken(refreshToken);
    const newAccessToken = JwtUtils.generateAccessToken({
      userId: decoded.userId,
      name: decoded.name,
    });
    setResponseStatus(event, 200);
    return {
      success: true,
      message: "New token created.",
      data: { token: newAccessToken },
    };
  } catch (error) {
    // token expired
    setResponseStatus(event, 401);
    return {
      success: false,
      message: "Expired token, try to login again.",
    };
  }
});
