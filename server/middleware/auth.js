import JwtUtils from "../utils/jwt";

const protectedRoutes = ["/api/v1/products"];

export default defineEventHandler(async (event) => {
  const reqPath = getRequestURL(event).pathname;
  const authHeader = getHeader(event, "authorization");

  if (protectedRoutes.some((route) => reqPath.startsWith(route))) {
    // check listed routes
    if (!authHeader) {
      // check header auth
      setResponseStatus(event, 401);
      return { success: false, message: "Unauthorized." };
    }
    const accessToken = authHeader?.split(" ")[1]; // extract token

    if (!accessToken) {
      // check token
      setResponseStatus(event, 401);
      return { success: false, message: "Token missing." };
    }

    try {
      const decoded = await JwtUtils.validateAccessToken(accessToken);
      event.context.user = decoded; // pass the user
    } catch (error) {
      console.error("JWT Error:", error.message);
      // token expired
      setResponseStatus(event, 403);
      return {
        success: false,
        message: "Forbidden",
      };
    }
  }
});
