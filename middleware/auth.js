export default defineNuxtRouteMiddleware(async (to, from) => {
  const protectedRoutes = ["/dashboard"];
  const auth = useTokenStore();

  if (auth.token.value && ["/login", "/signup"].includes(to.path)) {
    return navigateTo("/dashboard");
  }

  if (protectedRoutes.some((route) => to.path.startsWith(route))) {
    if (!auth.token.value) return navigateTo("/login");

    if (auth.isTokenExpired()) {
      try {
        const response = await $fetch("/api/v1/token");
        auth.setToken(response.data.token);
      } catch (error) {
        console.error("Token refresh failed:", error.data);
        auth.removeToken();
        return navigateTo("/login");
      }
    }
  }
});
