export default defineNuxtRouteMiddleware(async (to, from) => {
  const protectedRoutes = ["/dashboard"];
  const auth = useTokenStore();

  if (auth.token.value && ["/login", "/signup"].includes(to.path)) {
    return navigateTo("/dashboard");
  }

  if (protectedRoutes.some((route) => to.path.startsWith(route))) {
    if (!auth.token.value) return navigateTo("/login");
  }
});
