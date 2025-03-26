import UserService from "~/server/services/user.service";
import JwtUtils from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, "refreshToken");

  if (!refreshToken) {
    setResponseStatus(event, 401);
    return {
      success: false,
      message: "Unauthorized. You're not logged in!",
    };
  }

  const payload = await JwtUtils.validateRefreshToken(refreshToken);

  console.log("PAYLOADDDD : ", payload);

  const deletedToken = await UserService.deleteToken(payload.userId);
  if (!deletedToken) {
    setResponseStatus(event, 500);
    return {
      success: false,
      message: "Internal server error.",
    };
  }

  deleteCookie(event, "refreshToken");

  setResponseStatus(event, 200);
  return {
    success: true,
    message: "User logout successfully.",
  };
});
