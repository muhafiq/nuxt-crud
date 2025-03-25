import { signUpSchema } from "~/server/validation/user.validation";
import { normalizeZodError } from "~/utils";
import UserService from "~/server/services/user.service";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);
  const validated = await signUpSchema.safeParseAsync(data);

  if (!validated.success) {
    setResponseStatus(event, 400);
    return {
      success: false,
      message: "Validation error.",
      errors: normalizeZodError(validated),
    };
    /**
     * {
     *  success: true,
     *  message: "",
     *  errors: {
     *      email: ["error"],
     *      password: ["error"]
     *  }
     * }
     */
  }

  const hashedPassword = await bcrypt.hash(validated.data.password, 10);
  validated.data.password = hashedPassword;

  const newUser = await UserService.createUser(validated.data);
  setResponseStatus(event, 201);

  return {
    success: true,
    message: "User successfully registered.",
    data: newUser,
  };
});
