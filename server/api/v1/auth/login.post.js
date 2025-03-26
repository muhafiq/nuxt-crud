import { loginSchema } from "~/server/validation/user.validation";
import UserService from "~/server/services/user.service";
import { normalizeZodError } from "~/utils";
import bcrypt from "bcryptjs";
import JwtUtils from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const validated = loginSchema.safeParse(data);
  if (!validated.success) {
    setResponseStatus(event, 400);
    return {
      success: false,
      message: "Validation error.",
      errors: normalizeZodError(validated),
    };
  }

  const user = await UserService.getUserByEmail(validated.data.email);
  if (!user) {
    setResponseStatus(event, 400);
    return {
      success: false,
      message: "Validation error.",
      errors: {
        email: ["User is not registered!"],
      },
    };
  }

  const isMatch = await bcrypt.compare(validated.data.password, user.password);
  if (!isMatch) {
    setResponseStatus(event, 400);
    return {
      success: false,
      message: "Validation error.",
      errors: {
        password: ["Wrong password, go away!"],
      },
    };
  }

  const accessToken = JwtUtils.generateAccessToken({
    userId: user.userId,
    name: user.name,
  });
  const refreshToken = JwtUtils.generateRefreshToken({
    userId: user.userId,
    name: user.name,
  });

  const isUpdatedToken = await UserService.storeToken(
    refreshToken,
    validated.data.email
  );
  if (!isUpdatedToken) {
    console.error("Token error : ", isUpdatedToken);
    setResponseStatus(event, 500);
    return { success: false, message: "Internal server error." };
  }

  setCookie(event, "refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
  });

  return {
    success: true,
    message: "User login successfully.",
    data: {
      token: accessToken,
    },
  };
});
